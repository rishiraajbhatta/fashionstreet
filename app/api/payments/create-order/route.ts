import { auth } from "@/auth";
import { products } from "@/data/products";
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type CartItemRequest = {
  id: number;
  quantity: number;
};

export async function POST(request: Request) {
  try {
    // Require the user to be signed in.
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Please sign in before placing an order." },
        { status: 401 }
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay environment variables are missing.");

      return NextResponse.json(
        { error: "Payment service is not configured." },
        { status: 500 }
      );
    }

    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("items" in body) ||
      !Array.isArray(body.items)
    ) {
      return NextResponse.json(
        { error: "Invalid cart data." },
        { status: 400 }
      );
    }

    const items = body.items as CartItemRequest[];

    if (items.length === 0 || items.length > 50) {
      return NextResponse.json(
        { error: "Your cart is empty or contains too many items." },
        { status: 400 }
      );
    }

    let totalRupees = 0;
    const seenIds = new Set<number>();

    for (const item of items) {
      if (
        !Number.isSafeInteger(item.id) ||
        !Number.isSafeInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 20 ||
        seenIds.has(item.id)
      ) {
        return NextResponse.json(
          { error: "Invalid product or quantity." },
          { status: 400 }
        );
      }

      seenIds.add(item.id);

      const product = products.find(
        (product) => product.id === item.id
      );

      if (!product) {
        return NextResponse.json(
          { error: `Product ${item.id} was not found.` },
          { status: 400 }
        );
      }

      totalRupees += product.price * item.quantity;
    }

    if (
      !Number.isSafeInteger(totalRupees) ||
      totalRupees <= 0 ||
      totalRupees > 1000000
    ) {
      return NextResponse.json(
        { error: "The order total is invalid." },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: totalRupees * 100,
      currency: "INR",
      receipt: `fs_${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 8)}`,
      notes: {
        project: "FashionStreet",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error) {
    console.error("Create Razorpay order error:", error);

    return NextResponse.json(
      { error: "Unable to create the payment order. Please try again." },
      { status: 500 }
    );
  }
}
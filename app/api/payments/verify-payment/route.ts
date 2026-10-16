import { auth } from "@/auth";
import crypto from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Please sign in before verifying payment." },
        { status: 401 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      return NextResponse.json(
        { error: "Payment verification is not configured." },
        { status: 500 }
      );
    }

    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { error: "Invalid payment data." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const orderId = data.razorpay_order_id;
    const paymentId = data.razorpay_payment_id;
    const signature = data.razorpay_signature;

    if (
      typeof orderId !== "string" ||
      typeof paymentId !== "string" ||
      typeof signature !== "string" ||
      !/^order_[A-Za-z0-9]+$/.test(orderId) ||
      !/^pay_[A-Za-z0-9]+$/.test(paymentId) ||
      !/^[a-fA-F0-9]{64}$/.test(signature)
    ) {
      return NextResponse.json(
        { error: "Invalid payment verification details." },
        { status: 400 }
      );
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const receivedBuffer = Buffer.from(signature, "hex");

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return NextResponse.json(
        { error: "Payment signature verification failed." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      verified: true,
      paymentId,
      orderId,
      message: "Payment signature verified successfully.",
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return NextResponse.json(
      { error: "Unable to verify payment. Please try again." },
      { status: 500 }
    );
  }
}
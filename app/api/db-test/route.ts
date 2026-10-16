import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const client = await clientPromise;

    await client.db("fashionstreet").command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "FashionStreet connected to MongoDB successfully!",
    });
  } catch (error) {
    console.error("MongoDB connection test failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "MongoDB connection failed. Check the server terminal.",
      },
      { status: 500 }
    );
  }
}
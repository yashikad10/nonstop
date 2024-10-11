import dbConnect from '@/lib/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  console.log("Data submission API called");

  try {
    await dbConnect();

    const { walletAddress, email, twitterLink } = await req.json();

    if (!email || !walletAddress || !twitterLink) {
      return NextResponse.json(
        {
          message: "Email, Twitter post link, and wallet address are required",
          success: false,
        },
        { status: 400 }
      );
    }

    const user = new User({ walletAddress, email, twitterLink });

    await user.save(); 

    return NextResponse.json({
      message: "Data submitted successfully",
      success: true,
      user_data: user,
    });
  } catch (err: any) {
    console.error("Error in POST request handler:", err);

    // Handle duplicate email error
    if (err.code === 11000) {
      return NextResponse.json(
        {
          message: "Email already exists",
          success: false,
        },
        { status: 400 }
      );
    }

    // General server error response
    return NextResponse.json(
      { message: "SERVER ERROR" },
      { status: 500 }
    );
  }
}

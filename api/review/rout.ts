import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchProfile, postReview } from "@/api/strapi";

export async function POST(req: NextRequest) {
  try {
    const { description, rating } = await req.json();

    const token = (await cookies()).get("jwt")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await fetchProfile(token);
    if (!user?.username) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await postReview({ description, rating, username: user.username });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Review post error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

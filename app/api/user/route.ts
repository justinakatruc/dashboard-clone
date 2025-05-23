import { connectToDB } from "@/app/lib/utils";
import { User } from "@/app/lib/models";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectToDB();

  const { username, password } = await req.json();
  const user = await User.findOne({ username });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) return NextResponse.json({ error: "Incorrect password" }, { status: 401 });

  const { password: _, ...userWithoutPassword } = user.toObject();

  return NextResponse.json(userWithoutPassword);
}
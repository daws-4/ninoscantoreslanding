import { NextResponse } from "next/server";
import { Secret, sign } from "jsonwebtoken";
import { connectDB } from "@/libs/db";
import administradores from "@/models/administradores";
import bcrypt from "bcryptjs";

export async function POST(request: any) {
  connectDB();
    try {
  const data = await request.json();
  console.log(data);
  const admins = await administradores.findOne({ username: data.username });
  console.log(admins);
  if (
    admins.length == 0 ||
    !(await bcrypt.compare(data.password, admins.password))
  ) {
    return NextResponse.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  } else {
   
    const jwtName = process.env.JWT_NAME;
    if (!jwtName) {
      throw new Error("JWT_NAME is not defined in environment variables");
    }

    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
        username: admins.username,
        rol: admins.rol,
      },
      process.env.JWT_SECRET as Secret
    );

    const response = NextResponse.json({
      token,
      message: "Login successful",
    });

    response.cookies.set({
      name: jwtName,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 2,
      path: "/",
    });

    return response;
  }
    } catch (error) {
      return NextResponse.json((error as Error).message, {
        status: 400,
      }
      );
      
    }


}
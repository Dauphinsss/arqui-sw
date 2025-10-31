import { NextResponse } from "next/server";
import { InMemoryUserRepository } from "@/src/core/repositories/UserRepository";
import { UserService } from "@/src/core/services/UserService";

const repo = new InMemoryUserRepository();
const service = new UserService(repo);

export async function GET() {
  return NextResponse.json(service.listUsers());
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  service.createUser(name, email);
  return NextResponse.json({ message: "Usuario registrado correctamente" });
}

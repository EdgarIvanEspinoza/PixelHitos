import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
  }

  console.log("📩 Nuevo mensaje recibido:", { name, email, message });

  return NextResponse.json({ success: true, message: "Mensaje enviado con éxito" });
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'lapagina@pixelhitos.com',
      to: 'pixelhitos@gmail.com',
      subject: `Nuevo mensaje de: ${name}`,
      html: `<p>Hola Chino, aquí un mensaje de ${name} en PixelHitos.com</p>
      <p>Email: ${email}</p>
      <p>Mensaje: </p>
      <p>${message}</p>`,
    });

    return NextResponse.json(
      { message: 'Correo enviado correctamente', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}

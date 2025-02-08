import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json(
      { message: 'reCAPTCHA token is required' },
      { status: 400 }
    );
  }

  try {
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verificationUrl, { method: 'POST' });
    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { message: 'reCAPTCHA validated successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Invalid reCAPTCHA token', errors: data['error-codes'] },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error validating reCAPTCHA:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

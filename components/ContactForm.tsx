'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Input, Textarea, Button, Card, Checkbox, Link } from '@heroui/react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCheckedTC, setIsCheckedTC] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const isFormInvalid = loading || !isCheckedTC;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');

    if (!isCheckedTC) {
      setResponseMessage(
        'Debes aceptar la política de privacidad para continuar.'
      );
      return;
    }

    const token = (
      document.getElementById('g-recaptcha-response') as HTMLInputElement
    )?.value;

    if (!token) {
      setError(true);
      return;
    }

    setLoading(true);

    const recaptchaResponse = await fetch('/api/validate-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (recaptchaResponse.ok) {
      setError(false);
      setSuccess(true);
    } else {
      console.error('reCAPTCHA failed:', recaptchaResult.errors);
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      setResponseMessage('❌ Por favor, verifica el CAPTCHA');
    }

    if (success) {
      setResponseMessage(
        '✅ ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'
      );
    }
  }, [error, success]);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      <Card className="max-w-[800px] w-full mx-auto p-8 gap-4">
        <h2>Pide tu PixelHito</h2>
        <form
          action="https://formsubmit.co/a5e0ee1a5cccf546f9e654699e64cfd2"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <Input
            name="name"
            label="Nombre"
            placeholder="Tu nombre"
            required
            disabled={loading}
            errorMessage="Por favor, escribe tu nombre"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Tu correo electrónico"
            required
            disabled={loading}
            errorMessage="Por favor, escribe tu correo electrónico"
          />
          <Textarea
            name="message"
            label="Mensaje"
            placeholder="Escribe tu mensaje aquí"
            required
            disabled={loading}
            errorMessage="Por favor, escribe tu mensaje"
          />
          <div className="flex gap-1">
            <Checkbox
              name="terms"
              isSelected={isCheckedTC}
              onValueChange={() => setIsCheckedTC(!isCheckedTC)}
              disabled={loading}
            ></Checkbox>
            <>
              He leído y acepto la{' '}
              <Link isExternal href="/terminos-y-condiciones">
                política de privacidad
              </Link>
            </>
          </div>
          <div
            className="g-recaptcha mx-auto"
            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ></div>
          {responseMessage && <div className="mx-auto">{responseMessage}</div>}
          <Button type="submit" isDisabled={isFormInvalid} isLoading={loading}>
            Enviar Mensaje
          </Button>
        </form>
      </Card>
    </>
  );
}

'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Input, Textarea, Button, Card, Checkbox, Link } from '@heroui/react';
import { useSendEmail } from '../hooks/useSendEmail';

export const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [isCheckedTC, setIsCheckedTC] = useState(false);
  const { sendEmail, loading, error, success } = useSendEmail();

  const isFormInvalid = loading || !isCheckedTC;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setResponseMessage('❌ Verifica el CAPTCHA');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      token,
    };

    const result = await sendEmail(data);
    if (result) {
      setResponseMessage(
        '✅ ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'
      );
    } else {
      setResponseMessage(
        `❌ ${error || 'Hubo un error al enviar el mensaje.'}`
      );
    }
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      <Card className="max-w-[800px] w-full mx-auto p-8 gap-4">
        <h2>Pide tu PixelHito</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            name="name"
            label="Nombre"
            placeholder="Tu nombre"
            required
            disabled={loading || success}
            errorMessage="Por favor, escribe tu nombre"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Tu correo electrónico"
            required
            disabled={loading || success}
            errorMessage="Por favor, escribe tu correo electrónico"
          />
          <Textarea
            name="message"
            label="Mensaje"
            placeholder="Escribe tu mensaje aquí"
            required
            disabled={loading || success}
            errorMessage="Por favor, escribe tu mensaje"
          />
          <div className="flex gap-1">
            <Checkbox
              name="terms"
              isSelected={isCheckedTC}
              onValueChange={() => setIsCheckedTC(!isCheckedTC)}
              disabled={loading || success}
            />
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
};

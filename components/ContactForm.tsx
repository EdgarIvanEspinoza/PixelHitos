'use client';

import { useState } from 'react';
import Script from 'next/script'; // Para cargar el script de reCAPTCHA
import { Input, Textarea, Button, Card } from '@nextui-org/react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

  return (
    <>
      <Script
        src='https://www.google.com/recaptcha/api.js'
        strategy='lazyOnload'
      />

      <Card
        style={{
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
          padding: '2rem',
          gap: '1rem',
        }}
      >
        <h2>Pide tu PixelHito</h2>
        <form
          action='https://formsubmit.co/a5e0ee1a5cccf546f9e654699e64cfd2'
          method='POST'
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Input
            name='name'
            label='Nombre'
            placeholder='Tu nombre'
            required
            disabled={loading}
          />
          <Input
            name='email'
            type='email'
            label='Email'
            placeholder='Tu correo electrónico'
            required
            disabled={loading}
          />
          <Textarea
            name='message'
            label='Mensaje'
            placeholder='Escribe tu mensaje aquí'
            required
            disabled={loading}
          />

          <div
            className='g-recaptcha'
            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            style={{ margin: '0 auto' }}
          ></div>

          {error && (
            <p style={{ color: 'red', margin: '0 auto' }}>
              ❌ Por favor, verifica el CAPTCHA
            </p>
          )}
          {success && (
            <h3 style={{ color: 'green', margin: '0 auto' }}>
              ✅ Mensaje enviado con éxito
            </h3>
          )}
          <Button type='submit' isLoading={loading}>
            Enviar Mensaje
          </Button>
        </form>
      </Card>
    </>
  );
}

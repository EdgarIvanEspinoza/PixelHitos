'use client';

import { useState } from 'react';
import { Input, Textarea, Button, Card } from '@nextui-org/react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  return (
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
      {success && <h3>✅ Mensaje enviado con éxito</h3>}
      <form
        action='https://formsubmit.co/5e941637ab0ae560f4552df9028c5b1d'
        method='POST'
        onSubmit={() => setSuccess(true)}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <Input name='name' label='Nombre' placeholder='Tu nombre' required />
        <Input
          name='email'
          type='email'
          label='Email'
          placeholder='Tu correo electrónico'
          required
        />
        <Textarea
          name='message'
          label='Mensaje'
          placeholder='Escribe tu mensaje aquí'
          required
        />
        <Button type='submit'>Enviar Mensaje</Button>
      </form>
    </Card>
  );
}

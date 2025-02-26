import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  token: string;
}

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const recaptchaRes = await fetch('/api/validate-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: data.token }),
      });
      await recaptchaRes.json();
      if (!recaptchaRes.ok) {
        throw new Error('Error de validación reCAPTCHA');
      }

      const emailRes = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const emailResult = await emailRes.json();
      if (!emailRes.ok) {
        throw new Error(emailResult.error || 'Error al enviar el correo');
      }

      setSuccess(true);
      return emailResult;
    } catch (err: Error | unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error al enviar el correo';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
};

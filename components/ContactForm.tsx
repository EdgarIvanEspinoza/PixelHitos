"use client";

import { useState } from "react";
import { Input, Textarea, Button, Card } from "@nextui-org/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <Card className="card">
      <h2>Contacto</h2>
      {success && <h3 color="success">✅ Mensaje enviado con éxito</h3>}
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Nombre" value={formData.name} onChange={handleChange} required />
        <Input name="email" type="email" label="Email" value={formData.email} onChange={handleChange} required />
        <Textarea name="message" label="Mensaje" value={formData.message} onChange={handleChange} required />
        <Button type="submit" className="button" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </Card>
  );
}

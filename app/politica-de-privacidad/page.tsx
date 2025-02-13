export const metadata = {
  title: 'Política de Privacidad - PixelHitos',
  description:
    'Conoce cómo PixelHitos recopila, utiliza y protege tu información personal con nuestra política de privacidad.',
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-white rounded-lg">
      <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
      <p>
        En <strong>PixelHitos</strong>, nos tomamos muy en serio tu privacidad.
        Esta política explica cómo recopilamos, usamos y protegemos tu
        información personal.
      </p>
      <h2 className="text-2xl font-bold mt-6">
        1. Información que recopilamos
      </h2>
      <p>
        Podemos recopilar los siguientes datos personales cuando utilizas
        nuestro sitio web:
      </p>
      <ul className="list-disc ml-6">
        <li>Nombre y apellidos</li>
        <li>Dirección de correo electrónico</li>
        <li>Mensaje enviado a través de nuestros formularios</li>
        <li>
          Información técnica (como tu dirección IP y datos de navegación)
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-6">2. Cómo usamos tu información</h2>
      <p>
        La información recopilada se utiliza para los siguientes propósitos:
      </p>
      <ul className="list-disc ml-6">
        <li>Procesar tus solicitudes y responder a tus consultas</li>
        <li>Mejorar nuestros productos y servicios</li>
        <li>Enviar comunicaciones relevantes relacionadas con PixelHitos</li>
      </ul>
      <h2 className="text-2xl font-bold mt-6">
        3. Protección de tu información
      </h2>
      <p>
        Implementamos medidas de seguridad adecuadas para proteger tu
        información personal contra accesos no autorizados, pérdida, uso
        indebido o divulgación.
      </p>
      <h2 className="text-2xl font-bold mt-6">
        4. Cookies y tecnologías similares
      </h2>
      <p>
        Utilizamos cookies para mejorar la experiencia del usuario en nuestro
        sitio. Puedes configurar tu navegador para rechazar cookies, pero esto
        podría afectar la funcionalidad del sitio.
      </p>
      <h2 className="text-2xl font-bold mt-6">5. Terceros</h2>
      <p>
        No compartimos tu información personal con terceros, salvo cuando sea
        necesario para cumplir con la ley o para proporcionarte un servicio
        solicitado.
      </p>
      <h2 className="text-2xl font-bold mt-6">6. Tus derechos</h2>
      <p>
        Tienes derecho a acceder, corregir o eliminar tu información personal.
        Si deseas ejercer alguno de estos derechos, contáctanos en{' '}
        <a href="mailto:pixelhitos@gmail.com" className="color-blue-500">
          pixelhitos@gmail.com
        </a>
        .
      </p>
      <h2 className="text-2xl font-bold mt-6">7. Cambios a esta política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta política de privacidad en
        cualquier momento. Te recomendamos revisarla periódicamente.
      </p>
      <h2 className="text-2xl font-bold mt-6">8. Contacto</h2>
      <p>
        Si tienes preguntas o inquietudes sobre esta política de privacidad,
        contáctanos en{' '}
        <a href="mailto:pixelhitos@gmail.com" className="color-blue-500">
          pixelhitos@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export const metadata = {
  title: 'Términos y Condiciones - PixelHitos',
  description:
    'Lee nuestros términos y condiciones para entender cómo utilizamos tus datos y los servicios que ofrecemos en PixelHitos.',
};

export default function TerminosYCondiciones() {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-white rounded-lg">
      <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
      <p>
        Bienvenido a <strong>PixelHitos</strong>. Al utilizar nuestro sitio web,
        aceptas cumplir con los siguientes términos y condiciones. Por favor,
        léelos cuidadosamente.
      </p>
      <h2 className="text-2xl font-bold mt-6">1. Uso del sitio</h2>
      <p>
        Este sitio web está diseñado para proporcionar información y servicios
        relacionados con <strong>PixelHitos</strong>. Queda prohibido el uso del
        sitio para fines ilegales o no autorizados.
      </p>
      <h2 className="text-2xl font-bold mt-6">2. Propiedad intelectual</h2>
      <p>
        Todo el contenido de este sitio, incluidos textos, imágenes, logotipos y
        diseños, es propiedad de <strong>PixelHitos</strong>. Está prohibida la
        reproducción total o parcial sin autorización previa.
      </p>
      <h2 className="text-2xl font-bold mt-6">3. Política de privacidad</h2>
      <p>
        Nos comprometemos a proteger tu privacidad. Puedes consultar nuestra{' '}
        <a href="/politica-de-privacidad" className="color-blue-500">
          política de privacidad
        </a>{' '}
        para más detalles sobre cómo gestionamos tus datos.
      </p>
      <h2 className="text-2xl font-bold mt-6">4. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos y condiciones en
        cualquier momento. Es tu responsabilidad revisarlos regularmente.
      </p>
      <h2 className="text-2xl font-bold mt-6">5. Contacto</h2>
      <p>
        Si tienes alguna pregunta sobre estos términos, por favor contáctanos en{' '}
        <a href="mailto:pixelhitos@gmail.com" className="color-blue-500">
          pixelhitos@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

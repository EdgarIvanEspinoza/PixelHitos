'use-client';

import './globals.css';
import Providers from './providers';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'PixelHitos - Tu historia en mapas personalizados',
  description:
    'Regala y decora con tus emociones, lugares, sonidos... con hitos de tu historia.',
  openGraph: {
    type: 'website',
    url: 'https://www.pixelhitos.com',
    title: 'PixelHitos - Tu historia en mapas personalizados',
    description:
      'Regala y decora con tus emociones, lugares, sonidos... con hitos de tu historia.',
    siteName: 'PixelHitos',
    images: [
      {
        url: 'https://www.pixelhitos.com/assets/images/MAPA-version-ILIANA-SFEIR-01.png',
        width: 1200,
        height: 630,
        alt: 'Mapa personalizado - PixelHitos',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

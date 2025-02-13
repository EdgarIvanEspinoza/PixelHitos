'use-client';

import { Footer } from '@/components/Footer';
import './globals.css';
import Providers from './providers';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/Header';

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
    <html lang="es" className="light">
      <body>
        <Providers>
          <div className="flex flex-col mx-auto gap-8 bg-[#ffde02]">
            <Header />
            {children}
            <Footer />
          </div>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  );
}

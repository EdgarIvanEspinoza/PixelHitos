'use-client';

import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#ffde02',
      }}
    >
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

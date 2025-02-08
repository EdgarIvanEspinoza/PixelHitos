'use-client';

import ContactForm from '@/components/ContactForm';
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
        gap: '2rem',
        backgroundColor: '#ffde02',
      }}
    >
      <Header />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

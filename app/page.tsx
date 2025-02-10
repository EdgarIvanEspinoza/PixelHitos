'use-client';

import ContactForm from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <ContactForm />
    </>
  );
}

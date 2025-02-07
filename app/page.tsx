'use-client';

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <Hero />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

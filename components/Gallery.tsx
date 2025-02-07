"use client"; 

import { Image } from "@nextui-org/react";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <Image src="/assets/images/MAPA-Graffiti-01.png" alt="Mapa 1" className="gallery-image" />
      <Image src="/assets/images/MAPA-Prosperidad-01.png" alt="Mapa 2" className="gallery-image" />
      <Image src="/assets/images/MAPA-Prosperidad-02.png" alt="Mapa 3" className="gallery-image" />
    </div>
  );
}

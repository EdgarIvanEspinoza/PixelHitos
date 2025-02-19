import { NextResponse } from 'next/server';

const list = [
  {
    title: 'El primer baile',
    img: '/assets/images/ALEIRAM-cancion-01.png',
    price: 'sold-out',
  },
  {
    title: 'El Recreo',
    img: '/assets/images/MAPA-version-RECREO.png',
    price: 'sold-out',
  },
  {
    title: `Grafitea'o`,
    img: '/assets/images/grafiteao.png',
    price: '€10.00',
  },
  {
    title: 'La Prospe 02',
    img: '/assets/images/MAPA-Prosperidad-01.png',
    price: '€10.00',
  },
  {
    title: 'La Prospe 01',
    img: '/assets/images/MAPA-Prosperidad-02.png',
    price: 'sold-out',
  },
  {
    title: 'Madrid Design Festival 2025 Prospe',
    img: '/assets/images/MAPA-Prosperidad-MDF25.png',
    price: 'sold-out',
  },
  {
    title: 'My Streets',
    img: '/assets/images/MAPA-version-GIMENA.png',
    price: '€10.00',
  },
  {
    title: 'Las primeras palabras de JuanDi',
    img: '/assets/images/ILIANA-SFEIR-audio-01.png',
    price: 'sold-out',
  },
  {
    title: 'Aqui, allá y acullá',
    img: '/assets/images/JAL.png',
    price: '€10.00',
  },
  {
    title: 'Home',
    img: '/assets/images/MAPA-01.png',
    price: '€10.00',
  },
  {
    title: 'Prudente',
    img: '/assets/images/Prudente.png',
    price: '€10.00',
  },
  {
    title: 'Alcantarilla - Alcala',
    img: '/assets/images/Alcantacala.png',
    price: '€10.00',
  },
  {
    title: 'El favorito de Ily',
    img: '/assets/images/MAPA-version-ILIANA-SFEIR-01.png',
    price: '€10.00',
  },
  {
    title: 'Where it all began',
    img: `https://placehold.co/850x1134?text=Coming%5CnSoon`,
    price: 'coming soon',
  },
];

export async function GET() {
  return NextResponse.json(list);
}

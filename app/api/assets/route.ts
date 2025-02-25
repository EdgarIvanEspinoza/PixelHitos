import { NextResponse } from 'next/server';

const images = [
  {
    title: 'El primer baile',
    img: '/assets/images/ALEIRAM-cancion-01.png',
    price: 'sold-out',
    id: '0001',
  },
  {
    title: 'El Recreo',
    img: '/assets/images/MAPA-version-RECREO.png',
    price: 'sold-out',
    id: '0002',
  },
  {
    title: `Grafitea'o`,
    img: '/assets/images/grafiteao.png',
    price: '€10.00',
    id: '0003',
  },
  {
    title: 'La Prospe 02',
    img: '/assets/images/MAPA-Prosperidad-01.png',
    price: '€10.00',
    id: '0004',
  },
  {
    title: 'La Prospe 01',
    img: '/assets/images/MAPA-Prosperidad-02.png',
    price: 'sold-out',
    id: '0005',
  },
  {
    title: 'Madrid Design Festival 2025 Prospe',
    img: '/assets/images/MAPA-Prosperidad-MDF25.png',
    price: 'sold-out',
    id: '0006',
  },
  {
    title: 'My Streets',
    img: '/assets/images/MAPA-version-GIMENA.png',
    price: '€10.00',
    id: '0007',
  },
  {
    title: 'Las primeras palabras de JuanDi',
    img: '/assets/images/ILIANA-SFEIR-audio-01.png',
    price: 'sold-out',
    id: '0008',
  },
  {
    title: 'Aqui, allá y acullá',
    img: '/assets/images/JAL.png',
    price: '€10.00',
    id: '0009',
  },
  {
    title: 'Home',
    img: '/assets/images/MAPA-01.png',
    price: '€10.00',
    id: '0010',
  },
  {
    title: 'Prudente',
    img: '/assets/images/Prudente.png',
    price: '€10.00',
    id: '0011',
  },
  {
    title: 'Alcantarilla - Alcala',
    img: '/assets/images/Alcantacala.png',
    price: '€10.00',
    id: '0012',
  },
  {
    title: 'El favorito de Ily',
    img: '/assets/images/MAPA-version-ILIANA-SFEIR-01.png',
    price: '€10.00',
    id: '0013',
  },
  {
    title: 'Where it all began',
    img: `https://placehold.co/850x1134?text=Coming%5CnSoon`,
    price: 'coming soon',
    id: '0014',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const image = images.find((img) => img.id === id);
    if (!image) {
      return NextResponse.json(
        { error: 'Imagen no encontrada' },
        { status: 404 }
      );
    }
    return NextResponse.json(image);
  }

  return NextResponse.json(images);
}

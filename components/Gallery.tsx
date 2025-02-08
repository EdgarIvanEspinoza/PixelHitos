'use client';

import { Card, CardBody, CardFooter, Image } from '@heroui/react';

export const Gallery = () => {
  const list = [
    {
      title: 'ALEIRAM',
      img: '/assets/images/ALEIRAM-cancion-01.png',
      price: 'sold-out',
    },
    {
      title: 'RECREO',
      img: '/assets/images/MAPA-version-RECREO.png',
      price: 'sold-out',
    },
    {
      title: 'AVOCADO',
      img: '/assets/images/MAPA-Graffiti-01.png',
      price: '€10.00',
    },
    {
      title: 'Prospe 02',
      img: '/assets/images/MAPA-Prosperidad-01.png',
      price: '€10.00',
    },
    {
      title: 'Prospe 01',
      img: '/assets/images/MAPA-Prosperidad-02.png',
      price: 'sold-out',
    },
    {
      title: 'PROSPE',
      img: '/assets/images/MAPA-Prosperidad-MDF25.png',
      price: 'sold-out',
    },
    {
      title: 'GIMENA',
      img: '/assets/images/MAPA-version-GIMENA.png',
      price: '€10.00',
    },
    {
      title: 'ILIANA-SFEIR',
      img: '/assets/images/ILIANA-SFEIR-audio-01.png',
      price: 'sold-out',
    },
    {
      title: 'JAL',
      img: '/assets/images/JAL.png',
      price: '€10.00',
    },
    {
      title: 'HOME',
      img: '/assets/images/MAPA-01.png',
      price: '€10.00',
    },
    {
      title: 'ILIANA-SFEIR',
      img: '/assets/images/MAPA-version-ILIANA-SFEIR-01.png',
      price: '€10.00',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gap: '0.5rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem',
      }}
    >
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow='sm'
          onPress={() => console.log('item pressed')}
        >
          <CardBody
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              alt={item.title}
              radius='lg'
              shadow='sm'
              src={item.img}
              width='100%'
            />
          </CardBody>
          <CardFooter
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
            }}
          >
            <b>{item.title}</b>
            <p className='text-default-500'>{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

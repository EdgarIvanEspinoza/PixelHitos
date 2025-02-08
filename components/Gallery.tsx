'use client';

import { Card, CardBody, CardFooter, Image } from '@heroui/react';

export const Gallery = () => {
  const list = [
    {
      title: 'Orange',
      img: '/assets/images/ALEIRAM-cancion-01.png',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: '/assets/images/ILIANA-SFEIR-audio-01.png',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: '/assets/images/JAL.png',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: '/assets/images/MAPA-01.png',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: '/assets/images/MAPA-Graffiti-01.png',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: '/assets/images/MAPA-Prosperidad-01.png',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: '/assets/images/MAPA-Prosperidad-02.png',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: '/assets/images/MAPA-Prosperidad-MDF25.png',
      price: 'sold-out',
    },
    {
      title: 'Watermelon',
      img: '/assets/images/MAPA-version-GIMENA.png',
      price: '$12.20',
    },
    {
      title: 'Watermelon',
      img: '/assets/images/MAPA-version-ILIANA-SFEIR-01.png',
      price: '$12.20',
    },
    {
      title: 'Watermelon',
      img: '/assets/images/MAPA-version-RECREO.png',
      price: 'sold-out',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gap: '0.5rem',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      }}
    >
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow='sm'
          onPress={() => console.log('item pressed')}
        >
          <CardBody className='overflow-visible p-0'>
            <Image
              alt={item.title}
              className='w-full object-cover h-[140px]'
              radius='lg'
              shadow='sm'
              src={item.img}
              width='50%'
            />
          </CardBody>
          <CardFooter className='text-small justify-between'>
            <b>{item.title}</b>
            <p className='text-default-500'>{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

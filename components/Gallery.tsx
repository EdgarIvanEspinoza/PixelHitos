'use client';

import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
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

  const goLeft = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const goRight = () => {
    if (selected < list.length - 1) {
      setSelected(selected + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === 'ArrowRight') {
        goRight();
      } else if (e.key === 'ArrowLeft') {
        goLeft();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, selected]);

  return (
    <>
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
            onPress={() => {
              setIsOpen(true);
              setSelected(index);
            }}
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
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        size={'lg'}
        onClose={() => setIsOpen(false)}
      >
        <ModalContent>
          <>
            <ModalHeader className='flex flex-col gap-1'>
              {list[selected].title}
              <p className='text-default-500 text-small'>
                {list[selected].price}
              </p>
            </ModalHeader>
            <ModalBody>
              <Image
                alt={list[selected].title}
                radius='lg'
                shadow='sm'
                src={list[selected].img}
                width='100%'
              />
            </ModalBody>
            <ModalFooter className='flex justify-between'>
              {selected === 0 ? null : (
                <Button color='warning' variant='light' onPress={goLeft}>
                  <Image
                    alt='Left arrow'
                    src='/assets/icons/arrowBigLeft.svg'
                  />
                </Button>
              )}
              {selected === list.length - 1 ? null : (
                <Button
                  color='warning'
                  variant='light'
                  onPress={goRight}
                  style={{ marginLeft: 'auto' }}
                >
                  <Image
                    alt='Right arrow'
                    src='/assets/icons/arrowBigRight.svg'
                  />
                </Button>
              )}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

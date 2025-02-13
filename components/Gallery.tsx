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
      img: '/assets/images/MAPA-Graffiti-01.png',
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
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] w-full max-w-[800px] mx-auto p-4">
        {list.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => {
              setIsOpen(true);
              setSelected(index);
            }}
          >
            <CardBody className="flex justify-center items-center">
              <Image
                alt={item.title}
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="flex justify-between items-end text-sm">
              <b>{item.title}</b>
              <div className=" min-w-[80px] text-right mr-2">
                <p className="text-default-500">{item.price}</p>
              </div>
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
            <ModalHeader className="flex flex-col gap-1">
              {list[selected].title}
              <p className="text-default-500 text-small">
                {list[selected].price}
              </p>
            </ModalHeader>
            <ModalBody>
              <Image
                alt={list[selected].title}
                radius="lg"
                shadow="sm"
                src={list[selected].img}
                width="100%"
              />
            </ModalBody>
            <ModalFooter className="flex justify-between">
              {selected === 0 ? null : (
                <Button color="warning" variant="light" onPress={goLeft}>
                  <Image
                    alt="Left arrow"
                    src="/assets/icons/arrowBigLeft.svg"
                  />
                </Button>
              )}
              {selected === list.length - 1 ? null : (
                <Button
                  color="warning"
                  variant="light"
                  onPress={goRight}
                  className="ml-auto"
                >
                  <Image
                    alt="Right arrow"
                    src="/assets/icons/arrowBigRight.svg"
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

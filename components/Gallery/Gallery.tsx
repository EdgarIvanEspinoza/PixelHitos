'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@heroui/react';
import { ItemModal } from './ItemModal';
import useSWR from 'swr';
import { SkeletonComponent } from './Skeleton';
import { Item } from '@/types/interface';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const { data: list = [], isLoading } = useSWR<Item[]>('/api/assets', fetcher);

  const goLeft = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const goRight = () => {
    if (Array.isArray(list) && selected < list.length - 1) {
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
        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonComponent key={index} />
            ))}
          </>
        ) : (
          list.map((item: Item, index: number) => (
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
          ))
        )}
      </div>
      <ItemModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItemIndex={list[selected]?.id}
        goLeft={goLeft}
        goRight={goRight}
      />
    </>
  );
};

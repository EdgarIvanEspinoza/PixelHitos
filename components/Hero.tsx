'use client';

import { Button } from '@nextui-org/react';
import { Image } from '@heroui/react';

export const Hero = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4rem',
      }}
    >
      <p>
        Regala y decora con tus emociones, lugares, sonidos... con hitos de tu
        historia.
      </p>
      <Button href='https://instagram.com/pixelhitos' target='_blank'>
        Encarga tu Hito
      </Button>
      <Image
        src='/assets/images/MAPA-Graffiti-01.png'
        alt='Hero'
        width={842}
        height={595}
      />
    </div>
  );
};

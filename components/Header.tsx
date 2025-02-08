'use client';

import Image from 'next/image';

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '1rem',
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src='/assets/logo.svg' alt='Logo' width={80} height={80} />
    </div>
  );
};

'use client';

import { Link } from '@nextui-org/react';

export const Footer = () => {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
        © 2025 Pixelhitos | Síguenos en{' '}
        <Link href='https://instagram.com/pixelhitos'>Instagram</Link>
      </h1>
    </>
  );
};

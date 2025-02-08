'use client';

import { Divider, Link } from '@nextui-org/react';

export const Footer = () => {
  return (
    <>
      <Divider />
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        © 2025 Pixelhitos | Síguenos en{' '}
        <Link href='https://instagram.com/pixelhitos'>Instagram</Link>
      </h1>
    </>
  );
};

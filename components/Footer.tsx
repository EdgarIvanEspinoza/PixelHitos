'use client';

import { Link } from '@heroui/react';

export const Footer = () => {
  return (
    <>
      <h1 className="text-center mt-5 p-5 bg-white">
        © 2025 Pixelhitos | Síguenos en{' '}
        <Link href="https://instagram.com/pixelhitos">Instagram</Link>
      </h1>
    </>
  );
};

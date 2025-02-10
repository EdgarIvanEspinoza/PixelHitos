'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
};

'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex p-4 bg-white content-center justify-center">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuSquare } from 'lucide-react';

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav
      aria-label="navigation"
      className="flex h-[100px] w-full text-white justify-between items-center pt-4 pl-4 pb-4 bg-black z-[10]"
    >
      <Link
        href="/"
        className="text-3xl lg:text-4xl tracking-tighter font-semibold"
      >
        NSP Web Services.
      </Link>
      <div
        className="relative flex ml-auto mr-4 text-xl justify-center items-center bg-gray50 rounded-md p-[0.3rem] pl-[0.6rem] duration-300 space-x-2"
        style={{ cursor: 'pointer' }}
      >
        <button
          className="text-white bg-[#2a2a2a] p-2 rounded-md focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="text-lg">
            <MenuSquare />
          </span>
        </button>
        <div
          className={`absolute z-10 top-8 right-0 mt-2 w-32 bg-[#2a2a2a] rounded-md text-white transistion duration-150 ${
            isClicked ? 'opacity-100 visible' : 'opacity-0 hidden'
          }`}
          id="dropdown"
          onMouseLeave={() => setIsClicked(false)}
        >
          <div className="flex flex-col p-2 space-y-2">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="cursor-pointer">
              About
            </Link>
            <Link href="/blog" className="cursor-pointer">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

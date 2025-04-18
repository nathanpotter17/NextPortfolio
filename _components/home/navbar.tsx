'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { transform } = useSpring({
    transform: isClicked
      ? 'rotate(90deg)'
      : isHovered
      ? 'rotate(45deg)'
      : 'rotate(0deg)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <nav
      aria-label="navigation"
      className="flex w-full fixed justify-between items-center pt-4 pl-4 pb-4 bg-darkNav z-10"
    >
      <Link href="/">
        <Image src="/L1-d.svg" alt="logo" width={80} height={50} />
      </Link>
      <div
        className="relative flex ml-auto mr-4 text-xl justify-center items-center bg-gray50 rounded-md p-[0.3rem] pl-[0.6rem] hover:bg-white20 duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onClick={() => setIsClicked(!isClicked)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer' }}
      >
        <p>Menu</p>
        <animated.div style={{ transform }}>
          <ArrowRight size={24} />
        </animated.div>
        <div
          className={`absolute top-8 right-0 mt-2 w-32 bg-white20 rounded-md text-white ${
            isClicked ? 'opacity-100 visible bg-gray' : 'opacity-0 invisible'
          }`}
          id="dropdown"
          onMouseLeave={() => setIsClicked(false)}
        >
          <div className="flex flex-col p-2 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuSquare, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (window !== undefined) {
      setMounted(true);
    }
  }, [cart]);

  return (
    <nav
      aria-label="navigation"
      className="flex h-[100px] w-full text-white justify-between items-center pt-4 pl-4 pb-4 bg-black z-10"
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
          id="cartButton"
          aria-label="cartButton"
          onClick={() => {
            router.push('/cart');
          }}
          className="px-4 py-2 bg-gray-800 text-white text-sm uppercase rounded-md relative"
        >
          <ShoppingCart />
          {mounted && (
            <>
              {cart.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </div>
              )}
            </>
          )}
        </button>
        <button
          className="text-white bg-gray-800 p-2 rounded-md focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="text-lg">
            <MenuSquare />
          </span>
        </button>
        <div
          className={`absolute z-10 top-8 right-0 mt-2 w-32 bg-gray-900 rounded-md text-white transistion duration-150 ${
            isClicked ? 'opacity-100 visible' : 'opacity-0 hidden'
          }`}
          id="dropdown"
          onMouseLeave={() => setIsClicked(false)}
        >
          <div className="flex flex-col p-2 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

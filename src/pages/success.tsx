'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

export default function Success() {
  const router = useRouter();
  const { clearCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById('home');
      if (el) {
        clearCart();
        el.click();
      } else {
        console.log('Cart didnt clear');
      }
    }, 5000);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full justify-center flex flex-col my-6">
        <div className="relative items-center flex flex-col w-full">
          <h1 className="text-3xl leading-[3rem] text-center pb-6">
            You have paid successfully! Our team will follow up.
          </h1>

          <button
            id="home"
            onClick={() => {
              clearCart();
              router.push('/');
            }}
            className="bg-blu text-white p-4 py-2 px-4 rounded-md"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </>
  );
}

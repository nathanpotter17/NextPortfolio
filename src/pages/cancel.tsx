'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

export default function Success() {
  const router = useRouter();
  const { clearCart } = useCart();

  return (
    <div className="min-h-screen bg-white w-full justify-center flex flex-col">
      <div className="relative items-center flex flex-col w-full p-4">
        <h1 className="text-2xl text-black leading-[2rem] font-semibold text-center pb-4">
          You have successfully cancelled your purchase.
        </h1>
        <p className="text-center pb-4">
          Forget something? You can continue shopping by selecting below.
        </p>
        <div className="flex flex-row items-center space-x-4">
          <button
            onClick={() => {
              clearCart();
              router.push('/');
            }}
            className="bg-black text-white py-2 px-4 rounded cursor-pointer"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => {
              router.push('/');
            }}
            className="bg-[#d3d3d3] text-black py-2 px-4 rounded cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

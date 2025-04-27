'use client';

import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full justify-center flex flex-col mt-[-70px]">
      <div className="relative items-center flex flex-col w-full">
        <h1 className="text-2xl text-center px-4 mb-4">
          You have submitted your information successfully! Our team will follow
          up.
        </h1>

        <button
          onClick={() => {
            router.push('/');
          }}
          className="bg-black text-white py-2 px-4 rounded cursor-pointer"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

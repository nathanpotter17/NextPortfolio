'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Background() {
  // eslint-disable-next-line prefer-const
  let [ref, inView] = useInView({
    triggerOnce: false,
    initialInView: true,
    threshold: 0.1,
  });

  useEffect(() => {
    inView = true;
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`w-full h-[93vh] mt-[-70px] flex absolute z-[0] transition-opacity duration-300 bg-black ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="w-full h-[93vh] bg-fill bg-center bg-no-repeat scale-75"
          style={{
            backgroundImage: `url('/bg.png')`,
          }}
        />
      </div>
    </>
  );
}

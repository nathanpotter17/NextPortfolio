'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Why = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center pb-5">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">The NSP Formula</p>
      </div>
      <div className="text-center">
        <h1 className="text-[3rem] md:text-7xl max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-4 pb-4">
          Why NSP?
        </h1>
        <p className="text-center m-2 max-w-[512px] pb-8 text-lg text-tl">
          After years of experience, I know "Website Builders" fail
          businesses—broken plugins, no customer support, poor customization,
          and worst of all, terrible performance.
          <br />
          <br />
          Low or no-code sites sacrifice speed, while my hyper-optimized
          solutions deliver performance and flexibility from day one.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[940px]">
        <div
          className="m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg hover:cursor-pointer"
          onClick={() => {
            router.push('/blog/p2');
          }}
        >
          <h2 className="font-medium pb-2 text-3xl text-tl">UX First.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            I prioritize user satisfaction and conversion, crafting responsive,
            mobile-friendly websites that engage and guide visitors.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group">
            <Link
              href="/blog/p2"
              className="text-md text-gray pr-2 transition-colors duration-150 group-hover:text-tl"
            >
              Read more
            </Link>
            <ArrowRight
              size={20}
              className="transition-colors duration-150 group-hover:text-tl"
            />
          </div>
        </div>
        <div
          className="m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg hover:cursor-pointer"
          onClick={() => {
            router.push('/blog/p2');
          }}
        >
          <h2 className="font-medium pb-2 text-3xl text-tl">Elastic.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            I provide your business with an elastic solution that auto-scales to
            your needs, without needing to swap infrastructure, ever.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group">
            <Link
              href="/blog/p2"
              className="text-md text-gray pr-2 transition-colors duration-150 group-hover:text-tl"
            >
              Read more
            </Link>
            <ArrowRight
              size={20}
              className="transition-colors duration-150 group-hover:text-tl"
            />
          </div>
        </div>
        <div
          className="m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg hover:cursor-pointer"
          onClick={() => {
            router.push('/blog/p2');
          }}
        >
          <h2 className="font-medium pb-2 text-3xl text-tl">Reliable.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            I hand-pick the providers based on serviceability, uptime, and
            real-world performance, resulting in a website that has zero
            downtime.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group">
            <Link
              href="/blog/p2"
              className="text-md text-gray pr-2 transition-colors duration-150 group-hover:text-tl"
            >
              Read more
            </Link>
            <ArrowRight
              size={20}
              className="transition-colors duration-150 group-hover:text-tl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

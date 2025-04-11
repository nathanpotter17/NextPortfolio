'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Why = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center pb-5">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">Formula</p>
      </div>
      <div className="text-center">
        <h1 className="text-[3rem] md:text-7xl max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-4 pb-4">
          Quality First
        </h1>
        <p className="text-center m-2 max-w-[720px] pb-8 text-lg text-tl">
          After years in the field, I've seen how website builders let
          businesses down — sluggish load times, limited customization, and
          support that&apos;s nowhere to be found.
          <br />
          <br />I build fast, reliable, and highly flexible sites tailored to
          your goals.<br></br>No bloated plugins. No shortcuts. Just clean,
          scalable performance from day one.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[940px]">
        <div
          className="flex flex-col m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg hover:cursor-pointer"
          onClick={() => {
            router.push('/blog/p2');
          }}
        >
          <h2 className="font-medium pb-2 text-3xl text-tl">UX First.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            I put users at the center of every build — Mobile-friendly layouts,
            intuitive flows, and performance that keeps people engaged.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group mt-auto">
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
          className="flex flex-col m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg hover:cursor-pointer"
          onClick={() => {
            router.push('/blog/p2');
          }}
        >
          <h2 className="font-medium pb-2 text-3xl text-tl">Elastic.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            I deliver scalable infrastructure that grows with you — no need to
            re-platform as your traffic or business evolves.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group mt-auto">
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
          className="flex flex-col m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg hover:cursor-pointer"
          onClick={() => {
            router.push('/blog/p2');
          }}
        >
          <h2 className="font-medium pb-2 text-3xl text-tl">Reliable.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            I personally vet every provider and technology I use, providing
            peace of mind with real-world resilience and 99.9%+ uptime.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group mt-auto">
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

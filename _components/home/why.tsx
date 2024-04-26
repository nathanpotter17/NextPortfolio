import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Why = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-10 pb-10">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">Our Formula</p>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-center leading-[70px] tracking-tight pt-4 pb-4 text-6xl text-tl">
          Why Us
        </h1>
        <p className="text-center max-w-[512px] pb-8 text-lg text-tl">
          Performance is often impacted on low or no-code sites, and our
          hyper-optimized web solutions come with flexible infrastructure from
          day one.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-[940px]">
        <div className="m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg">
          <h2 className="font-medium pb-2 text-3xl text-tl">UX First.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            We prioritize user satisfaction and conversion, crafting responsive,
            mobile-friendly websites that engage and guide visitors.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group hover:cursor-pointer">
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
        <div className="m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg">
          <h2 className="font-medium pb-2 text-3xl text-tl">Elastic.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            We provide your business with an elastic solution that auto-scales
            to your needs, without needing to swap infrastructure.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group hover:cursor-pointer">
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
        <div className="m-2 p-4 max-w-[300px] bg-bgD border-2 border-gray50 rounded-lg">
          <h2 className="font-medium pb-2 text-3xl text-tl">Reliable.</h2>
          <p className="leading-[1.35rem] text-base font-light text-tl">
            We hand-pick our providers based on serviceability, uptime, and
            real-world performance, resulting in a stack that has zero downtime.
          </p>
          <div className="flex items-center pt-4 text-gray transition-colors duration-150 group hover:cursor-pointer">
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

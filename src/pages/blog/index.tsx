import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="w-full mx-auto max-w-[930px] pt-20">
      <h1 className="text-5xl font-medium text-center mb-6 lg:mb-12">
        NSP Web Services Blog
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-[1rem] pt-0 gap-2">
        <Link href="/blog/p3">
          <div className="flex flex-col bg-[#a2a2a235] rounded-md p-6">
            <Image
              src="/wasm.svg"
              alt="Blog Post Image"
              className="rounded-lg mb-4 w-full h-auto object-cover"
              width={250}
              height={150}
            />
            <h2 className="font-bold text-xl mb-2">
              The Power of Web Assembly
            </h2>
            <p className="text-gray-500 mb-2">Published on January 26, 2025</p>
            <p className="text-base mb-4 leading-6">
              In this post, I explain a recent project where I used Web Assembly
              to bring machine learning libraries into the browser.
            </p>

            <div className="mt-auto text-blue-500 font-bold hover:underline">
              Read more
            </div>
          </div>
        </Link>
        <Link href="/blog/p2">
          <div className="flex flex-col bg-[#a2a2a235] rounded-md p-6">
            <Image
              src="/methodd.svg"
              alt="Blog Post Image"
              className="rounded-lg mb-4 w-full h-auto object-cover"
              width={250}
              height={150}
            />
            <h2 className="font-bold text-xl mb-2">
              NSP Studios: Client Success Stories
            </h2>
            <p className="text-gray-500 mb-2">Published on April 22, 2024</p>
            <p className="text-base mb-4 leading-6">
              In this post, I explain NSP&apos;s process for greatly improving
              the form and function of the clients&apos; websites.
            </p>
            <div className="mt-auto text-blue-500 font-bold hover:underline">
              Read more
            </div>
          </div>
        </Link>
        <Link href="/blog/p1">
          <div className="flex flex-col bg-[#a2a2a235] rounded-md p-6">
            <Image
              src="/payload.svg"
              alt="Blog Post Image"
              className="rounded-lg mb-4 w-full h-auto object-cover"
              width={250}
              height={150}
            />
            <h2 className="font-bold text-xl mb-2">
              Using Payload CMS with NextJS
            </h2>
            <p className="text-gray-500 mb-2">Published on December 18, 2024</p>
            <p className="text-base mb-4 leading-6">
              In the fast-paced world of e-commerce, creating a seamless and
              well-structured online shopping experience is crucial.
            </p>
            <div className="mt-auto text-blue-500 font-bold hover:underline">
              Read more
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

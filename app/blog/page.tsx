import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog: React.FC = () => {
  return (
    <div className="font-InterTight w-full mx-auto max-w-[930px] pt-20">
      <h1 className="text-5xl font-medium text-center mb-6 lg:mb-12">
        NSP Blog
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-[1rem] pt-0 gap-2">
        <div className="flex flex-col bg-bgD rounded-md p-6">
          <Image
            src="/wasm.svg"
            alt="Blog Post Image"
            className="rounded-lg mb-4 w-full h-auto object-cover"
            width={250}
            height={150}
          />
          <h2 className="font-bold text-xl mb-2">The Power of Web Assembly</h2>
          <p className="text-gray-500 mb-2">Published on January 26, 2025</p>
          <p className="text-base mb-4 leading-6">
            In this post, I explain a recent project where I used Web Assembly
            to bring machine learning libraries into the browser.
          </p>
          <div className="mt-auto">
            <Link
              href="/blog/p3"
              className="text-blue-500 font-bold hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-bgD rounded-md p-6">
          <Image
            src="/method.svg"
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
            In this post, we explain our process for greatly improving the form
            and function of our clients&apos; websites.
          </p>
          <div className="mt-auto">
            <Link
              href="/blog/p2"
              className="text-blue-500 font-bold hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-bgD rounded-md p-6">
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
          <p className="text-gray-500 mb-2">Published on December 18, 2025</p>
          <p className="text-base mb-4 leading-6">
            In the fast-paced world of e-commerce, creating a seamless and
            well-structured online shopping experience is crucial.
          </p>
          <div className="mt-auto">
            <Link
              href="/blog/p1"
              className="text-blue-500 font-bold hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <footer className="text-center mt-4 pt-5 pb-5 border-t border-gray50">
        <p className="text-gray50 text-sm">&copy; 2024 NSP Blog</p>
      </footer>
    </div>
  );
};

export default Blog;

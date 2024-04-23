import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog: React.FC = () => {
  return (
    <div className="font-InterTight w-full mx-auto max-w-[930px] pt-24">
      <h1 className="text-5xl font-medium text-center mb-16">NSP Blog</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[1rem] gap-4">
        <div className="flex flex-col bg-bgD rounded-md p-6">
          <Image
            src="/p2.png"
            alt="Blog Post Image"
            className="w-full h-auto rounded-lg mb-4"
            width={512}
            height={512}
          />
          <h2 className="font-bold text-xl mb-2">
            NSP Studios: Our Formula for Web Success
          </h2>
          <p className="text-gray-500 mb-2">Published on December 18, 2023</p>
          <p className="text-base mb-4 leading-6">
            In this post, we explain our formula for success on the web, and
            where to look for possible improvement.
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
            src="/home.png"
            alt="Blog Post Image"
            className="w-full h-auto rounded-lg mb-4"
            width={512}
            height={512}
          />
          <h2 className="font-bold text-xl mb-2">
            Creating 3D Scenes for the Web
          </h2>
          <p className="text-gray-500 mb-2">Published on December 18, 2023</p>
          <p className="text-base mb-4 leading-6">
            Using Blender3D and the @react-three ecosystem, I walk through how I
            built a 90&apos;s Nostalgia Room filled with all my favorites.
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
            src="/home.png"
            alt="Blog Post Image"
            className="w-full h-auto rounded-lg mb-4"
            width={512}
            height={512}
          />
          <h2 className="font-bold text-xl mb-2">
            Using Payload CMS with NextJS
          </h2>
          <p className="text-gray-500 mb-2">Published on December 18, 2023</p>
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
      <footer className="text-center mt-16 pt-5 border-t border-gray50">
        <p className="text-gray50 text-sm">&copy; 2024 NSP Blog</p>
      </footer>
    </div>
  );
};

export default Blog;

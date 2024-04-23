import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Post1() {
  return (
    <article className="max-w-screen-md mx-auto mt-16 p-5">
      <div className="text-left">
        <Image
          src="/p2.png"
          alt="Blog Post Image"
          className="w-full h-auto rounded-lg mb-2.5"
          width={400}
          height={150}
        />
        <h1 className="text-4xl mb-2.5 mt-3">
          Elevate Your Online Presence with NSP Studios
        </h1>
        <p className="text-gray-500 mb-5">Published on April 22, 2024</p>
        <p>
          In the digital age, your website is not just a brochure; it's a
          gateway to your brand's story, a tool for engagement, and a platform
          for growth. At NSP.dev Web Services, we understand the importance of a
          seamless, user-friendly online experience. Our dedicated objective is
          to transform the ordinary browsing experience into an unparalleled,
          seamless journey. We ensure users can effortlessly navigate and
          extract maximum value from the content, or be flowed into secure pages
          or areas where conversion happens, thus improving your brand's CTR.
        </p>

        <div className="text-base leading-6">
          <h1 className="text-3xl mb-2.5 mt-3">Web Applications</h1>
          <p>
            We specialize in creating custom web applications tailored to meet
            your unique needs. By combining cutting-edge technologies with
            expert development skills, we deliver powerful and user-friendly web
            applications that drive your business forward.
          </p>
          <h1 className="text-3xl mb-2.5 mt-3">User Experience Research</h1>
          <p>
            Our UX service enhances user satisfaction and usability of your
            digital products. We conduct research, optimize design, and
            prioritize mobile-friendly experiences to drive engagement and
            improve conversions.
          </p>
          <h1 className="text-3xl mb-2.5 mt-3">Mobile Applications</h1>
          <p>
            Our mobile application design combines user-centric workflows with
            high-quality form & function, engaging the user as each process is
            completed. We prioritize seamless interaction across all devices.
          </p>
          <h1 className="text-3xl mb-2.5 mt-3">
            The Average WP or Site-Builder Website
          </h1>
          <p>
            Consider a website with ~ 6 pages & form functionality. Our last
            project&apos;s page scores according to Lighthouse:
          </p>
          <Image
            src="/fast.png"
            width={420}
            height={150}
            alt="web audit scores 100"
          />
          <p>
            For reference, this performance rivals twitter.com, the #1 ranked
            site for performance this year.
          </p>
        </div>
        <div className="mt-5 ml-auto p-2.5 max-w-30 rounded-md bg-gray-200 hover:bg-gray-300 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link href="/blog">Back to Blog</Link>
        </div>
        <footer className="text-center mt-10 mb-24 pt-5 border-t border-gray-200">
          <p className="m-0 text-gray-500 text-sm">&copy; 2024 NSP Blog</p>
        </footer>
      </div>
    </article>
  );
}

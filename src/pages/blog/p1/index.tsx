'use client';
import React from 'react';
import Link from 'next/link';

export default function Post1() {
  return (
    <article className="max-w-screen-md mx-auto mt-10 mb-10">
      <div className="text-left text-lg p-5">
        <br></br>
        <h1 className="text-5xl font-bold mb-2.5 mt-3">
          Using Payload CMS with NextJS
        </h1>

        <p className="text-blue-600 text-md mt-6">
          &#35;Experience, &#35;Full-Stack &middot; 3 min read &middot; December
          18, 2025
        </p>
        <p className="text-black font-medium text-lg text-md mb-6">
          Nathan Potter
        </p>

        <div className="text-base leading-6">
          <h1 className="text-4xl font-medium mb-2.5 mt-3">PayloadCMS</h1>
          <p>
            In the fast-paced world of e-commerce, creating a seamless and
            well-structured online shopping experience is crucial. Recently, I
            undertook a project that aimed to achieve just that, utilizing the
            powerful combination of Next.js and Payload CMS.
          </p>
          <a
            className="underline text-blue-600"
            href="https://github.com/nathanpotter17/NextE-Com"
          >
            E-Commerce Shop Example
          </a>
          <br />
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">Why NextJS?</h1>
          <p>
            Next.js continues to gain popularity in the development community,
            and for good reason. Its server-side rendering, automatic code
            splitting, and ease of use make it an ideal choice for building
            high-performance web applications. In the context of e-commerce,
            these features are invaluable for delivering a fast and responsive
            user experience.
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">Payload Features</h1>
          <p>
            Payload CMS serves as the backbone of content management in this
            project. Its user-friendly interface empowers even non-technical
            users to manage product listings, update content, and control the
            overall access structure of the e-commerce site. With Payload,
            developers can create flexible data models tailored to the specific
            needs of the platform. This can be found in{' '}
            <code>/payload/payload.config.ts</code>.
          </p>
          <br />
          <p>
            Collections stand out as a vital component in Payload. These
            collections are shaped by their configurations, providing you the
            flexibility to create as many as your application demands. With each
            collection, a new instance is automatically set up in your selected
            database, aligning with the fields you&apos;ve defined. Picture
            collections as conventional database counterparts, each featuring a
            distinct URL, fields, labels, admin settings, and preferences for
            document authentication and uploads. For detailed information, refer
            to <code>/payload/payload-types.ts</code>.
          </p>
          <br />
          <p>
            Similar to collections, globals are one-off elements, perfect for
            use in headers, navigations, banners, or footers. Modifying the
            globals is the easiest way to quickly make your app stand out. Next,
            redefine the re-usables! Navigate to{' '}
            <code>./App/_Components/anyComponent</code>, find the component you
            want to change, and go to index.tsx and index.module.scss to begin
            component re-creation.
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">Conclusion</h1>
          <p>
            Payload CMS stands as a testament to the capabilities of flexible
            data models in the realm of e-commerce. The integration of a robust
            frontend framework with a flexible and user-friendly content
            management system has resulted in a powerful platform that balances
            developer control with content management that anyone can
            understand.
          </p>
        </div>
        <br />
        <a
          className="underline text-blue-600"
          href="https://www.youtube.com/watch?v=3JUsg-WsU9o"
        >
          Source: JavaScript Mastery
        </a>
        <div className="my-8" />
        <Link
          className="p-4 bg-gray-500/50 rounded-full cursor-pointer"
          href="/blog"
        >
          Back to Blog
        </Link>
      </div>
    </article>
  );
}

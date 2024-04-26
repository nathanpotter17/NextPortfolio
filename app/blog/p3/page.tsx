"use client";
import React from "react";
import Link from "next/link";

export default function Post1() {
  return (
    <article className="max-w-screen-md mx-auto mt-16 p-5">
      <div className="text-left text-lg">
        <br></br>
        <h1 className="text-5xl font-bold mb-2.5 mt-3">
          Elevate Your Online Presence with NSP Studios
        </h1>
        <p className="text-white font-medium text-lg text-md mt-5">
          Nathan Potter
        </p>
        <p className="text-acc4 mb-5 text-md">
          &#35;Strategy, &#35;Design &middot; 4 min read &middot; April 22, 2024
        </p>
        <div className="text-base leading-6">
          <h1 className="text-lg mb-2.5">Payload Features</h1>
          <p>
            Payload CMS serves as the backbone of content management in this
            project. Its user-friendly interface empowers even non-technical
            users to manage product listings, update content, and control the
            overall access structure of the e-commerce site. With Payload,
            developers can create flexible data models tailored to the specific
            needs of the platform. This can be found in{" "}
            <code>/payload/payload.config.ts</code>.
          </p>
          <br />
          <h1 className="text-lg mb-2.5">Conclusion</h1>
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
        <div className="btn cursor-pointer">
          <Link href="/blog">Back to Blog</Link>
        </div>
        <footer className="text-center mt-10 mb-24 pt-5 border-t border-gray-200">
          <p className="m-0 text-gray-500 text-sm">&copy; 2023 NSP Blog</p>
        </footer>
      </div>
    </article>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/_components/contact/contactForm";

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
        <p>
          In the digital age, your website is not just a brochure; it&apos;s a
          gateway to your brand&apos;s story, a tool for engagement, and a
          platform for growth. At NSP Studios, we understand the importance of a
          seamless, user-friendly online experience. Our dedicated objective is
          to transform the ordinary browsing experience into an unparalleled,
          seamless journey. We ensure users can effortlessly navigate and
          extract maximum value from the content, or be flowed into secure pages
          or areas where conversion happens, thus improving your brand&apos;s
          CTR.
        </p>
        <div className="text-lg leading-6">
          <h1 className="text-4xl font-medium mb-2.5 mt-3">Web Applications</h1>
          <p>
            We specialize in creating custom web applications tailored to meet
            your unique needs. By combining cutting-edge technologies with
            expert development skills, we deliver powerful and user-friendly web
            applications that drive your business forward.
          </p>
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            User Experience Research
          </h1>
          <p>
            Our UX service enhances user satisfaction and usability of your
            digital products. We conduct research, optimize design, and
            prioritize mobile-friendly experiences to drive engagement and
            improve conversions.
          </p>
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            Mobile Applications
          </h1>
          <p>
            Our mobile application design combines user-centric workflows with
            high-quality form & function, engaging the user as each process is
            completed. We prioritize seamless interaction across all devices.
          </p>
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            Your Average Site-Builder Website
          </h1>
          <p>
            Consider your average Wordpress, Godaddy, Wix, or similar website
            with ~ 6 pages & form functionality. Our last project&apos;s page
            scores according to Lighthouse:
          </p>
          <br></br>
          <Image
            src="/old.png"
            width={420}
            height={150}
            alt="web audit scores 100"
            className="w-full h-auto"
          />
          <br></br>
          <Image
            src="/fast.png"
            width={420}
            height={150}
            alt="web audit scores 100"
            className="w-full h-auto"
          />
          <br></br>
          <p>
            For reference, this performance matches some of the top ranked sites
            for this year.
          </p>
          <a
            className="text-blue-500"
            href="https://www.tooltester.com/en/blog/website-loading-time-statistics/#Analyzing_The_Worlds_Top_100_Websites"
          >
            (tooltester)
          </a>
          <br></br>
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            I aim to improve your page by:
          </h1>
          <ul className="list-disc p-5">
            <li>
              Optimizing page flow so that visible elements are the only ones
              loaded first, improving first contentful paint & LCP. You can see
              the five performance audits I conduct here.
            </li>
            <li className="pt-2">
              Examining the HTML structure of your current website and stripping
              out all unnecessary extra styling or components, thus improving
              the user experience by focusing performance capability on loading
              interactive elements.
            </li>
            <li className="pt-2">
              Creating aesthetically pleasing designs & cohesive branding that
              rival the best website builders & agencies in the industry -
              except with better performance.
            </li>
            <li className="pt-2">
              Eliminate render-blocking resources - currently, lots of images on
              pages are served in a .jpg format. By converting those elements to
              .webp, .png, or .svg would result in about a 2sec page speed index
              improvement.
            </li>
            <li className="pt-2">
              Eliminate unused or unnecessary CSS styling and use CSS modules or
              TailwindCSS to scope tighter components that are only loaded when
              necessary.
            </li>
            <li className="pt-2">
              Optimize all device views for user-friendly interactions and
              coherent design language.
            </li>
          </ul>
          <p>
            All of these in consideration should result, depending on how media
            content is hosted, a considerable page speed-up and guaranteed
            accessibility, best practices, and SEO score of 90. Oh, and peace of
            mind that your site is secure.
          </p>
          <h1 className="text-4xl font-medium mb-2.5 mt-5">
            Why does this matter?
          </h1>
          <ul className="list-disc p-5 pt-0">
            <li className="pt-2">
              Improved User Experience: A fast and accessible website provides
              users with a seamless and enjoyable browsing experience, enhancing
              their satisfaction and encouraging them to explore more.
            </li>
            <li className="pt-2">
              Higher Conversion Rates: Faster websites tend to have lower bounce
              rates and higher conversion rates. Users are more likely to engage
              with your content, products, or services when they experience
              quick and efficient interactions.
            </li>
            <li className="pt-2">
              Enhanced Search Engine Ranking: Search engines, such as Google,
              prioritize fast and accessible websites in their rankings. This
              can result in increased organic traffic and improved visibility in
              search engine results pages.
            </li>
            <li className="pt-2">
              Competitive Advantage: A professional and high-performing website
              sets your business apart from competitors. Visitors are more
              likely to stay on your site and explore different sections when
              they don&apos;t have to wait for content to load.
            </li>
            <li className="pt-2">
              Improved Accessibility: An accessible website ensures that
              individuals with disabilities can easily navigate and access your
              content. This inclusivity not only broadens your audience but also
              demonstrates a commitment to diversity and user needs.
            </li>
            <li className="pt-2">
              Optimized for Various Devices: Our websites are optimized for
              different devices and screen sizes. This adaptability ensures that
              users across desktops, tablets, and smartphones have a consistent
              and enjoyable experience.
            </li>
            <li className="pt-2">
              Enhanced Brand Image: A fast, accessible, and professional website
              reflects positively on your brand image. It communicates that your
              business is modern, reliable, and committed to delivering a
              high-quality online experience.
            </li>
            <li className="pt-2">
              Easier Maintenance and Upgrades: Well-structured websites are
              easier to maintain, update, and provide better overall stability.
              This ensures that your online presence remains current, secure,
              and aligned with evolving industry standards.
            </li>
            <li className="pt-2">
              Better Analytics Insights: A fast website allows for more accurate
              tracking of user behavior through analytics tools that can be
              deployed for you using Posthog. This data can be valuable in
              understanding user preferences and optimizing content for improved
              engagement.
            </li>
            <li className="pt-2">
              Improved Server Resource Efficiency: Fast-loading websites consume
              fewer server resources on Vercel, leading to cost savings and
              improved efficiency in hosting environments. This also means
              saving the planet energy too, read here.
            </li>
          </ul>
        </div>
        <div className="items-center text-center mb-10">
          <ContactForm
            val="btn rounded-full"
            ptype="P"
            text="Request A Free Quote"
          />
        </div>
        <Link
          className="btn2 hover:bg-gray rounded-full cursor-pointer"
          href="/blog"
        >
          Back to Blog
        </Link>
        <footer className="text-center mt-10 pt-5 border-t border-gray-200">
          <p className="m-0 text-gray-500 text-sm">&copy; 2024 NSP Blog</p>
        </footer>
      </div>
    </article>
  );
}

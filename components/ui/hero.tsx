import Link from 'next/link';
import ContactForm from '../forms/resend/sendEmail';
import Background from './background';

export const Hero = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col items-center justify-center min-h-screen w-full z-[2] mt-[-70px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[3.75rem] max-w-[730px] text-center font-bold tracking-[-2px] text-white leading-[3.3rem] lg:leading-17.5 pb-4">
            Simple & Effective Web Solutions.
          </h1>
          <div className="flex flex-row space-x-2 items-center">
            <ContactForm
              classes="outline-2 outline-gray-500/50 bg-gray-600/50 px-6 py-2 rounded-full w-full text-white hover:cursor-pointer hover:bg-gray-500 transistion duration-300"
              buttonText="Contact"
            />
            <Link
              href={'/products'}
              className="outline-2 outline-white/50 bg-gray-300 px-6 py-2 rounded-full hover:bg-white transistion duration-300"
            >
              Shop
            </Link>
            <Link
              href={'/about'}
              className="outline-2 outline-white/50 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transistion duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

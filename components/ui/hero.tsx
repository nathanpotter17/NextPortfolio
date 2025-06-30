import Link from 'next/link';
import ContactForm from '../forms/resend/sendEmail';
import Background from './background';

export const Hero = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col items-center justify-center min-h-screen w-full mt-[-100px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[3.75rem] max-w-[730px] text-center font-bold tracking-[-2px] text-white leading-[3.3rem] lg:leading-17.5 pb-4">
            Simple & Effective Web Solutions.
          </h1>
          <div className="flex flex-row space-x-2 items-center">
            <ContactForm classes="btn1" buttonText="Contact" />
            <Link href={'/about'} className="btn3">
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

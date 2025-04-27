import Link from 'next/link';
import { Pricing } from '../../components/ui/pricing';
import ContactForm from '../../components/forms/resend/sendEmail';

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black min-h-screen p-6">
      <div className="flex flex-col items-center justify-center min-h-screen w-full mt-[-100px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[3.75rem] max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pb-4">
            Simple & Effective Web Solutions.
          </h1>
          <div className="flex flex-row space-x-2">
            <ContactForm
              classes="bg-gray-600/50 p-4 rounded-full w-full hover:cursor-pointer hover:bg-gray-500 transistion duration-300"
              buttonText="Contact Us"
            />
            <Link
              href={'/products'}
              className="bg-gray-300 px-6 py-4 rounded-full"
            >
              Shop
            </Link>
            <Link
              href={'/about'}
              className="border-2 border-gray-500/50 px-6 py-4 rounded-full"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <Pricing />
    </div>
  );
}

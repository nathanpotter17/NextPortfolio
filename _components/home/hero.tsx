import { ContactForm } from '../contact/contactForm';
import Background from './3DElement/background';

export const Hero = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[3rem] md:text-7xl max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-4 pb-4 pr-2 pl-2">
            Delivering Simple & Effective Web Solutions.
          </h1>
          <div>
            <ContactForm val="btn rounded-full" ptype="P" text="Free Quote" />
          </div>
        </div>
      </div>
    </>
  );
};

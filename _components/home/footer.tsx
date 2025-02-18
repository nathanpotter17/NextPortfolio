'use client';
import { ContactForm } from '../contact/contactForm';

export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="w-full h-auto text-white p-6 bg-bgD">
      <div className="flex flex-col justify-between items-center">
        <div className="flex sm:flex-row pt-2 pb-2">
          <button onClick={goToTop} className="btn rounded-full w-auto mr-4">
            Go to Top
          </button>
          <ContactForm
            val="btn3 rounded-full w-auto"
            ptype="P"
            text="Free Quote"
          />
        </div>
      </div>

      <div className="mt-2 text-center">
        <p>© 2025 NSP Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

import { Check } from 'lucide-react';
import Link from 'next/link';

export const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-5 animate-fade-up pb-12">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray-500/50 rounded-lg">
        <p className="text-sm px-2 text-gray-500 animate-flip-up delay-[200ms]">
          Pricing
        </p>
      </div>
      <div className="mx-auto">
        <h1 className="text-[3.75rem] mx-4 text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-4 pb-4">
          Options for Everyone
        </h1>
        <p className="text-center pb-8 p-2 text-lg text-tl">
          Only pay for what you need, and upgrade at any time. Billed month to
          month until you cancel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 text-black">
        {/* Card 1 */}
        <div className="relative m-2 p-8 bg-white border-2 border-gray-500/50 rounded-lg flex flex-col">
          <div className="absolute top-6 right-6 ml-auto rounded-lg border border-gray-500/50">
            <p className="text-black text-sm px-4 py-1">Most Value</p>
          </div>
          <h3 className="text-lg font-medium">Start-Up</h3>
          <div className="text-[4rem] py-2 pb-2 font-normal">$2000</div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-1 text-acc1">$150</p>
            <span className="text-sm text-gray-500">/ monthly</span>
          </div>
          <br></br>
          {/* Features list */}
          <div className="space-y-[1rem] text-center">
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">Custom Forms 3k emails/mo*</span>
            </div>
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">Up to 50 Pages</span>
            </div>
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">100GB Storage & Bandwidth</span>
            </div>
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">Monthly Traffic Reports</span>
            </div>
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">90+ Google Auditing Score</span>
            </div>
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">No unique viewer caps</span>
            </div>
          </div>
          <div className="flex justify-center mt-auto pt-[2rem]">
            <Link
              href="/products/prod_SCIzROaMxMXTCy"
              className="btn1 w-full text-center"
              style={{ color: 'black' }}
            >
              Get Started Today
            </Link>
          </div>
        </div>
        <div className="relative m-2 p-8 bg-white border-2 border-gray-500/50 rounded-lg flex flex-col">
          <div className="absolute top-6 right-6 ml-auto rounded-lg border border-gray-500/50">
            <p className="text-black text-sm px-4 py-1">Most Popular</p>
          </div>

          <h3 className="text-lg font-medium">Pro</h3>
          <div className="text-[4rem] font-normal py-2 pb-2">$3000</div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-1">$300</p>
            <span className="text-sm text-gray-500">/ monthly</span>
          </div>
          <br></br>
          {/* Features list */}
          <div className="space-y-[1rem] text-center">
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">Custom Forms 50k emails/mo*</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">Up to 100 Pages</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">
                Choose from Hubspot, Stripe, and more.
              </span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">1TB Storage & Bandwidth</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">Monthly Traffic + UX Reports</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">90+ Google Auditing Score</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">Monthly UX Optimizations</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">Continuous SEO</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} />
              <span className="ml-2">No unique viewer caps</span>
            </div>
          </div>
          <div className="flex justify-center mt-auto pt-[2rem]">
            <Link
              href="/products/prod_SCMxjvLPAGflZD"
              className="btn2 w-full text-center"
            >
              Get Started Today
            </Link>
          </div>
        </div>
        <div className="relative m-2 p-8 bg-white border-2 border-gray-500/50 rounded-lg flex flex-col">
          <h3 className="text-lg font-medium">Business</h3>
          <div className="text-[4rem] font-normal py-2 pb-2">$5000</div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-1">$650+</p>
            <span className="text-sm text-gray-500">/ monthly</span>
          </div>
          <br></br>
          {/* Features list */}
          <div className="space-y-[1rem] text-center">
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Custom Forms 100k+ emails/mo*</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Custom Page Functions</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">250+ Pages</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Choose your own API suite</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">1TB+ Storage & Bandwidth</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Monthly Traffic + UX Reports</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">90+ Google Auditing Score</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Continuous UX + CRO</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Continuous SEO</span>
            </div>
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">No unique viewer caps</span>
            </div>
          </div>
          <div className="flex justify-center mt-auto pt-[2rem]">
            <Link
              href="/products/prod_SCMvnyru99QezS"
              className="btn1 w-full text-center"
              style={{ color: 'black' }}
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 p-4">
        $20 Email & Pages Overage Fee, $50 Storage Overage Fee
      </p>
    </section>
  );
};

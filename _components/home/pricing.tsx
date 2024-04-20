import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-10 pb-10">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">Pricing Options</p>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-center leading-[70px] tracking-tight pt-4 pb-4 text-6xl text-tl">
          Pricing Options for all SMBs
        </h1>
        <p className="text-center pb-8 text-lg text-tl">
          Only pay for what you need, and upgrade at any time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="m-2 p-8 bg-tl border-2 border-gray rounded-lg text-td flex flex-col">
          <h3 className="text-lg font-medium">Start-Up</h3>
          <div className="font-DMSans text-[4rem] py-2 pb-2 font-normal">
            $1500
          </div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-1 text-acc1">$150</p>
            <span className="text-sm text-gray-500">/ monthly</span>
          </div>
          <br></br>
          {/* Features list */}
          <div className="space-y-[1rem] text-center">
            <div className="flex items-center">
              <Check color="black" size={16} />
              <span className="ml-2">Custom Form 3k emails/mo*</span>
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
            <button className="w-full font-semibold bg-bgD text-tl border-2 border-gray py-3 px-4 rounded-full hover:bg-tl hover:text-td transistion background duration-150 ease-in-out">
              Sign up now
            </button>
          </div>
        </div>
        <div className="relative m-2 p-8 bg-bgD border-2 border-gray50 rounded-lg text-tl flex flex-col">
          <div className="absolute top-6 right-6 ml-auto rounded-lg border border-gray50">
            <p className="gradientText font-DMSans tracking-tighter text-sm px-4 py-1 font-semibold">
              Most Popular
            </p>
          </div>

          <h3 className="text-lg font-medium">Pro</h3>
          <div className="font-DMSans text-[4rem] font-normal py-2 pb-2">
            $3000
          </div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-1 text-acc4">$500</p>
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
                Choose from Zapier, Stripe, and{" "}
                <a className="underline hover:cursor-pointer">more</a>.
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
            <button className="w-full font-semibold bg-tl text-td border-2 border-gray py-3 px-4 rounded-full hover:bg-bgD hover:text-tl transistion background duration-150 ease-in-out">
              Sign up now
            </button>
          </div>
        </div>
        <div className="m-2 p-8 bg-tl border-2 border-gray rounded-lg text-td flex flex-col">
          <h3 className="text-lg font-medium">Business</h3>
          <div className="font-DMSans text-[4rem] font-normal py-2 pb-2">
            $5000
          </div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-1 text-acc1">$750</p>
            <span className="text-sm text-gray-500">/ monthly</span>
          </div>
          <br></br>
          {/* Features list */}
          <div className="space-y-[1rem] text-center">
            <div className="flex items-center">
              <Check width={16} height={16} color="black" />
              <span className="ml-2">Custom Forms 100k+ emails/mo</span>
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
            <button className="w-full font-semibold bg-bgD text-tl border-2 border-gray py-3 px-4 rounded-full hover:bg-tl hover:text-td transistion background duration-150 ease-in-out">
              Sign up now
            </button>
          </div>
        </div>
      </div>
      <p className="text-gray py-4">
        $20 Email & Pages Overage Fee, $50 Storage Overage Fee
      </p>
    </section>
  );
};

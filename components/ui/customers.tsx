import Image from 'next/image';

export const Customers = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-5 mb-16">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray-500/50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">Testimonials</p>
      </div>
      <div className="text-center">
        <h1 className="text-[3.75rem] max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-4 pb-4">
          Client Success
        </h1>
        <p className="text-center pb-8 text-lg text-tl">
          Hear what my satisfied customers have to say about my team work and
          services.
          <br />
          Read success stories on my blog:<br></br>
          <a href="https://nathanpotter.tech/blog/p2" className="text-blue-500">
            Client Study - MMF
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 space-y-4">
        <div className="flex flex-col bg-white text-black p-4 max-w-xs mx-2 border-2 border-gray-500/50 rounded-lg flex-grow h-full">
          <div className="flex-grow flex flex-col justify-between h-full">
            <div className="mt-2 text-lg font-light">
              You have been great to work with - I have no complaints at all!
            </div>
            <div className="flex items-center mt-auto pb-2 pt-6">
              <div className="flex items-center">
                <Image
                  src="/sm_logo.jpg"
                  alt="helping"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <div className="ml-2 text-md font-bold">Jett C | CEO</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white text-black p-4 max-w-xs mx-2 border-2 border-gray-500/50 rounded-lg flex-grow h-full">
          <div className="flex-grow flex flex-col justify-between h-full">
            <div className="mt-2 text-lg font-light">
              An effective problem solver and someone who produces incredibly
              impressive work.
            </div>
            <div className="flex items-center mt-auto pb-2 pt-6">
              <div className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="helping"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <div className="ml-2 text-md font-bold">Nathan B | CEO</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white text-black p-4 max-w-xs mx-2 border-2 border-gray-500/50 rounded-lg flex-grow h-full">
          <div className="flex-grow flex flex-col justify-between h-full">
            <div className="mt-2 text-lg font-light">
              Very happy overall, time to support is extremely quick.
            </div>
            <div className="flex items-center mt-auto pb-2 pt-6">
              <div className="flex items-center">
                <Image
                  src="/logo2.svg"
                  alt="helping"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <div className="ml-2 text-md font-bold">Dmitry L | CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

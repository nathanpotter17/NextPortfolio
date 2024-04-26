import Image from "next/image";

export const Customers = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-10 pb-10">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">Testimonials</p>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-center leading-[70px] tracking-tight pt-6 pb-4 text-6xl text-tl">
          What our clients have to say
        </h1>
        <p className="text-center pb-8 text-lg text-tl">
          Hear what our satisfied customers have to say about our team and
          services.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-bgD text-white p-4 max-w-xs mx-2  border-2 border-gray rounded-lg">
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
                className="rounded-full"
              />
            </div>
            <div className="ml-2 text-md font-bold">Jett C | CEO</div>
          </div>
        </div>
        <div className="flex flex-col bg-bgD text-white p-4 max-w-xs mx-2  border-2 border-gray rounded-lg">
          <div className="mt-2 text-lg font-light">
            An effective problem solver and someone who is valuable on teams.
          </div>
          <div className="flex items-center mt-auto pb-2 pt-6">
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="helping"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="ml-2 text-md font-bold">Nathan B | CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

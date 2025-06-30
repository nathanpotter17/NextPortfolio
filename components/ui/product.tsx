import { Hand, Lock, Server, Sparkles, UserRound, Watch } from 'lucide-react';

export const Product = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-4 pb-4">
      <div className="flex justify-between p-1 gap-2 border-2 border-gray-500/50 rounded-lg">
        <p className="text-sm px-2 text-gray-500">Tech Stack</p>
      </div>
      <div className="text-center">
        <h1 className="text-[3.75rem] max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-4 pb-4">
          NSP Stack
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[940px]">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="m-2 p-6 max-w-[300px] border-2 border-gray-500/50 rounded-lg text-center bg-bgD"
          >
            <div className="flex justify-center items-center w-14 m-auto rounded-full p-4 bg-gray-200">
              {index === 0 ? (
                <Sparkles color="black" size={20} />
              ) : index === 1 ? (
                <Watch color="black" size={20} />
              ) : index === 2 ? (
                <Server color="black" size={20} />
              ) : index === 3 ? (
                <Hand color="black" size={20} />
              ) : index === 4 ? (
                <UserRound color="black" size={20} />
              ) : (
                <Lock color="black" size={20} />
              )}
            </div>
            <h3 className="text-lg font-medium py-2">
              {index === 0
                ? 'UX First Websites'
                : index === 1
                  ? 'Strong Aesthetics'
                  : index === 2
                    ? 'Fast and Reliable Providers'
                    : index === 3
                      ? "Don't rely on DIY"
                      : index === 4
                        ? 'Traffic and Conversion'
                        : 'Secure Apps'}
            </h3>
            <p className="text-md text-gray-400">
              {index === 0
                ? 'Device targets are met with Quality UX.'
                : index === 1
                  ? 'Libraries to choose from, or go completely custom.'
                  : index === 2
                    ? 'Powered by AWS, Resend, Hubspot, Stripe, etc.'
                    : index === 3
                      ? "No reliance on AI or 'no-code' tools - never worry about reliability again."
                      : index === 4
                        ? 'Monthly reports tracking unique visitors and conversion. Session Replay available.'
                        : 'I use defensive code patterns and trusted encryption providers to keep your data safe.'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full h-auto p-6 bg-black text-white">
      <div className="flex flex-col justify-between items-center">
        <div className="flex sm:flex-row pt-2 pb-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-black p-4 rounded-full w-auto mr-4 hover:cursor-pointer"
          >
            Go to Top
          </button>
        </div>
      </div>

      <div className="mt-2 text-center">
        <p>© 2025 NSP Web Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

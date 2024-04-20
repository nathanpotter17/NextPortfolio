"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Contact from "./contact";

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        className="btn rounded-full"
        aria-label="Free Quote"
        onClick={toggleModal}
      >
        Free Quote
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 z-10 flex items-center justify-center">
          <button
            className="absolute top-4 left-4 text-tl text-2xl cursor-pointer z-20"
            onClick={toggleModal}
          >
            <X color="black" size={24} />
          </button>
          <Contact />
        </div>
      )}
    </>
  );
};

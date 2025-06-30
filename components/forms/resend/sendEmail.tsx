'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

interface ContactFormProps {
  classes: string;
  buttonText: string;
}

export default function ContactForm({ classes, buttonText }: ContactFormProps) {
  const router = useRouter();
  const [sub, setSub] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumberPattern =
      /^(\+1\s?)?(1\s?)?(\()?(\d{3})(\))?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { firstName, lastName, email, phoneNumber, message } = formData;

    if (!phoneNumberPattern.test(phoneNumber.trim())) {
      alert('Please ensure the phone number is properly formatted.');
      return;
    }

    if (!emailPattern.test(email.trim())) {
      alert('Please ensure the email address is properly formatted.');
      return;
    }

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      setSub(true);

      const res = await fetch('/api/resend/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: phoneNumber,
          message,
        }),
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error('Server error:', errorData);
        alert('There was an error submitting the form.');
      }
    } catch (err) {
      console.error('Network or unexpected error:', err);
      alert('Submission failed. Please try again.');
    } finally {
      setSub(false);
    }
  };

  return (
    <>
      {!showModal ? (
        <button
          className={`${classes}`}
          aria-label="Free Quote"
          onClick={toggleModal}
        >
          {buttonText}
        </button>
      ) : (
        <>
          <div
            className="fixed inset-0 bg-black flex items-center justify-center min-h-screen"
            style={{ marginInlineEnd: '0px', zIndex: 10 }}
          >
            <button
              className="absolute top-4 left-4 text-tl text-2xl cursor-pointer z-20"
              onClick={toggleModal}
            >
              <X color="white" size={24} />
            </button>
            <div className="max-w-sm mx-auto p-8 bg-white rounded-2xl shadow-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact
              </h2>
              <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
                <div className="flex gap-4">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="123-123-1234"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    minLength={12}
                    maxLength={224}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sub}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-gray-500 to-gray-900 cursor-pointer ${sub ? 'animate-pulse infinite' : ''} text-white rounded-lg transition duration-300`}
                >
                  {sub ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

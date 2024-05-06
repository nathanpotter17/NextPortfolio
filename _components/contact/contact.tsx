"use client";

import React, { useEffect, useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import { toast } from "react-hot-toast";

interface ContactProps {
  ptype: string;
}

export default function Contact({ ptype }: ContactProps) {
  const [hpv, setHPV] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isManagedVisible, setIsManagedVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [projectType, setSelectedprojectType] = useState("Low or No Code");
  const [managedType, setSelectedManagedType] = useState("No");

  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (ptype === "Start-Up" || ptype === "Pro" || ptype === "Business") {
      setPlan(ptype);
      setCurrentPage(2);
    }

    if (ptype === "P") {
      setCurrentPage(1);
      setPlan("Start-Up");
    }
  }, []);

  const handlePlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(event.target.value);
  };

  const handleprojectTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const projectType = event.target.value;
    setSelectedprojectType(projectType);
    setIsManagedVisible(
      projectType === "Low or No Code" || projectType === "Custom Code"
    );
  };
  const handleManagedTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const managedType = event.target.value;
    setSelectedManagedType(managedType);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const progressPercentage = (currentPage / 3) * 100;

  return (
    <>
      <div className="fixed top-4 w-3/4 h-5 bg-gray50 rounded-lg z-10">
        <div
          className="h-5 bg-black rounded-full transition-width duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {!isSubmitted && (
        <form
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (hpv !== "") {
              toast.error("Form submission failed.");
              return;
            }
            if (error) {
              toast.error(error);
            } else {
              toast.success("Email sent successfully!");
              setIsSubmitted(true);
            }
            setIsSubmitting(false);
          }}
          className="flex justify-center items-center m-0 h-screen w-screen text-td bg-tl relative"
        >
          <div className="relative w-[20rem] max-w-[20rem] max-h-[22rem]">
            {/* Page 1 - Plan */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-opacity duration-500 ease-out w-full ${
                currentPage === 1 ? "opacity-100 pointer-events-auto" : ""
              }`}
            >
              <h2 className="text-2xl text-center font-bold mb-4 ml-2.5">
                Which plan suits you best?
              </h2>
              <div className="mb-4">
                <div className="flex space-x-4">
                  <input
                    type="radio"
                    value="Start-Up"
                    defaultChecked={true}
                    id="plan1"
                    name="plan"
                    onChange={(e) => handlePlan(e)}
                    className={`hidden`}
                  ></input>
                  <label
                    htmlFor="plan1"
                    className={`flex flex-col justify-center items-center text-center h-[5rem] w-[90px] border-2 border-gray m-auto rounded-lg relative text-tl cursor-pointer transition-all duration-500 group ${
                      plan === "Start-Up"
                        ? "bg-bgD text-white scale-105"
                        : "hover:bg-gray50"
                    }`}
                  >
                    <span
                      className={`${
                        plan === "Start-Up" ? "text-white" : "text-black"
                      }`}
                    >
                      Start-Up
                    </span>
                  </label>
                  <input
                    type="radio"
                    value="Pro"
                    id="plan2"
                    name="plan"
                    onChange={(e) => handlePlan(e)}
                    className={`hidden`}
                  ></input>
                  <label
                    htmlFor="plan2"
                    className={`flex flex-col cursor-pointer justify-center items-center text-center h-[5rem] w-[90px] border-2 border-gray m-auto rounded-lg relative text-tl transition-all duration-500 group ${
                      plan === "Pro"
                        ? "bg-bgD text-white scale-105"
                        : "hover:bg-gray50"
                    }`}
                  >
                    <span
                      className={`${
                        plan === "Pro" ? "text-white" : "text-black "
                      }`}
                    >
                      Pro
                    </span>
                  </label>
                  <input
                    type="radio"
                    value="Business"
                    id="plan3"
                    name="plan"
                    onChange={(e) => handlePlan(e)}
                    className={`hidden`}
                  ></input>
                  <label
                    htmlFor="plan3"
                    className={`flex flex-col cursor-pointer justify-center items-center text-center h-[5rem] w-[90px] border-2 border-gray m-auto rounded-lg relative text-tl transition-all duration-500 group ${
                      plan === "Business"
                        ? "bg-bgD text-white scale-105"
                        : "hover:bg-gray50"
                    }`}
                  >
                    <span
                      className={`${
                        plan === "Business" ? "text-white" : "text-black"
                      }`}
                    >
                      Business
                    </span>
                  </label>
                </div>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="plan"
                  id="plan"
                  defaultValue={plan}
                />
              </div>
              <div className="flex justify-center w-full mt-10 ml-1.5">
                <button
                  type="button"
                  className="btn2 rounded-full"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
            {/* Page 2 - Website Info - Type and SEO */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-opacity duration-500 ease-out w-full ${
                currentPage === 2 ? "opacity-100 pointer-events-auto" : ""
              }`}
            >
              <div className="mb-4">
                <h2 className="text-2xl text-center font-bold mb-6">
                  Tell us about your website
                </h2>
                <div className="mb-4">
                  <div className="flex space-x-4 w-[95%]">
                    <input
                      type="radio"
                      value="Low or No Code"
                      defaultChecked={true}
                      id="projectType1"
                      name="projectType"
                      onChange={(e) => handleprojectTypeChange(e)}
                      className={`hidden`}
                    ></input>
                    <label
                      htmlFor="projectType1"
                      className={`flex flex-col cursor-pointer justify-center items-center text-center h-[5rem] w-[90px] border-2 border-gray m-auto rounded-lg relative text-tl transition-all duration-500 group ${
                        projectType === "Low or No Code"
                          ? "bg-bgD text-white scale-105"
                          : "hover:bg-gray50"
                      }`}
                    >
                      <span
                        className={`${
                          projectType === "Low or No Code"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        Low or No
                        <br />
                        Code
                      </span>
                    </label>
                    <input
                      type="radio"
                      value="Custom Code"
                      id="projectType2"
                      name="projectType"
                      onChange={(e) => handleprojectTypeChange(e)}
                      className={`hidden`}
                    ></input>
                    <label
                      htmlFor="projectType2"
                      className={`flex flex-col cursor-pointer justify-center items-center text-center h-[5rem] w-[90px] border-2 border-gray m-auto rounded-lg relative text-tl transition-all duration-500 group ${
                        projectType === "Custom Code"
                          ? "bg-bgD text-white scale-105"
                          : "hover:bg-gray50"
                      }`}
                    >
                      <span
                        className={`${
                          projectType === "Custom Code"
                            ? "text-white"
                            : "text-black "
                        }`}
                      >
                        Custom Code
                      </span>
                    </label>
                    <input
                      type="radio"
                      value="No Online Presence"
                      id="projectType3"
                      name="projectType"
                      onChange={(e) => handleprojectTypeChange(e)}
                      className={`hidden`}
                    ></input>
                    <label
                      htmlFor="projectType3"
                      className={`flex flex-col cursor-pointer justify-center items-center text-center h-[5rem] w-[90px] border-2 border-gray m-auto rounded-lg relative text-tl transition-all duration-500 group ${
                        projectType === "No Online Presence"
                          ? "bg-bgD text-white scale-105"
                          : "hover:bg-gray50"
                      }`}
                    >
                      <span
                        className={`${
                          projectType === "No Online Presence"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        No Online Presence
                      </span>
                    </label>
                  </div>
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="projectType"
                    id="projectType"
                    defaultValue={projectType}
                  />
                </div>
              </div>
              <div style={{ display: "none" }}>
                <input
                  type="text"
                  id="hp"
                  name="hp"
                  value={hpv}
                  onChange={(e) => setHPV(e.target.value)}
                  tabIndex={-1}
                />
              </div>
              <div
                className={`mb-4 transition-all duration-500 ease-in-out ${
                  isManagedVisible
                    ? "max-h-[20rem] opacity-100 visible"
                    : "max-h-0 opacity-0 invisible"
                }`}
              >
                <h2 className="text-center text-2xl font-bold mb-6">
                  Is it E-Commerce and/or SEO enabled?
                </h2>
                <div className="m-auto w-auto flex flex-row justify-start items-center max-w-[180px]">
                  <input
                    type="radio"
                    value="Yes"
                    id="managed1"
                    name="managed"
                    onChange={(e) => handleManagedTypeChange(e)}
                  ></input>
                  <label
                    htmlFor="managed1"
                    className={`"flex flex-col cursor-pointer justify-center items-center text-center h-[2.75rem] w-[6rem] border-2 border-gray m-auto rounded-lg relative text-td transition-all duration-500" ${
                      managedType === "Yes"
                        ? "bg-bgD text-white scale-105 flex flex-col justify-center items-center text-center"
                        : "flex flex-col justify-center items-center text-center transistion-bg hover:bg-gray50 duration-500"
                    }`}
                  >
                    <span>Yes</span>
                  </label>
                  <div className="m-2"></div>
                  <input
                    type="radio"
                    value="No"
                    id="managed2"
                    name="managed"
                    defaultChecked={true}
                    onChange={(e) => handleManagedTypeChange(e)}
                  ></input>
                  <label
                    htmlFor="managed2"
                    className={`"flex flex-col cursor-pointer justify-center items-center text-center h-[2.75rem] w-[6rem] border-2 border-gray m-auto rounded-lg relative text-td transition-all duration-500" ${
                      managedType === "No"
                        ? "bg-bgD text-white scale-105 flex flex-col justify-center items-center text-center"
                        : "flex flex-col justify-center items-center text-center hover:bg-gray50"
                    }`}
                  >
                    <span>No</span>
                  </label>
                </div>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="managed"
                  id="managed"
                  defaultValue={managedType}
                />
              </div>
              <div className="flex justify-center w-full mt-10">
                <button
                  type="button"
                  className="btn2 rounded-full"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
            {/* Page 3 - First, Last, Email, Message */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-opacity duration-500 ease-out w-full ${
                currentPage === 3 ? "opacity-100 pointer-events-auto" : ""
              }`}
            >
              <h2 className="text-2xl text-center font-bold mb-4">
                Let&apos;s get in contact...
              </h2>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="Fname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="Fname"
                  name="Fname"
                  placeholder="Nick"
                  className="mt-1 block w-full py-2 px-3 border-2 border-gray bg-tl rounded-md shadow-sm focus:outline-none focus:ring-gray50 focus:border-gray50 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="Lname"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lname"
                  name="Lname"
                  placeholder="James"
                  className="mt-1 block w-full py-2 px-3 border-2 border-gray bg-tl rounded-md shadow-sm focus:outline-none focus:ring-gray50 focus:border-gray50 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="senderEmail"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  placeholder="Your email address"
                  className="mt-1 block w-full py-2 px-3 border-2 border-gray bg-tl rounded-md shadow-sm focus:outline-none focus:ring-gray50 focus:border-gray50 sm:text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  style={{ resize: "none" }}
                  className="mt-1 h-[90px] block w-full py-2 px-3 border-2 border-gray bg-tl rounded-md shadow-sm focus:outline-none focus:ring-gray50 focus:border-gray50 sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-center w-full mt-10">
                <SubmitBtn />
              </div>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <div className="text-center mt-8 text-td bg-tl">
          Quote Sent! Expect an email from our team soon.
        </div>
      )}
      <div className="absolute bottom-4 text-center w-full text-td text-xs">
        By submitting this form you opt-in for email messages and may opt-out at
        any time.
        <div className="mb-1" />
        <a href="/" className="text-blue-500 hover:text-blue-700 mr-2">
          Privacy Policy
        </a>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          Terms &amp; Conditions
        </a>
      </div>
    </>
  );
}

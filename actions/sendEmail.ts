"use server";

import React from "react";
import { Resend } from "resend";
import {
  validateString,
  getErrorMessage,
  validateEmailFormat,
  validateSelectOption,
} from "@/lib/utils";
import ContactFormEmail from "@/_components/contact/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const fname = formData.get("Fname");
  const lname = formData.get("Lname");
  const message = formData.get("message");
  const state = formData.get("state");
  const projectType = formData.get("projectType") as string;
  const managed = formData.get("managed") as string;

  const requiredFields = ["senderEmail", "Fname", "Lname", "state", "managed"];

  if (!validateSelectOption(managed)) {
    return {
      error: "Please select an answer regarding management",
    };
  }
  if (!validateString(fname, 50)) {
    return {
      error: "Invalid first name length",
    };
  }
  if (!validateString(lname, 50)) {
    return {
      error: "Invalid last name length",
    };
  }
  if (!validateString(senderEmail, 60) || !validateEmailFormat(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(state, 14)) {
    return {
      error: "Invalid State length",
    };
  }
  if (!validateString(message, 200)) {
    return {
      error: "Invalid Message length",
    };
  }
  if (typeof projectType !== "string") {
    return {
      error: "Please select a valid property type",
    };
  }
  for (const field of requiredFields) {
    if (!formData.get(field)) {
      return {
        error: `The ${field} field is required.`,
      };
    }
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "NSP Studios Website <nathanpotter.tech>",
      to: ["nathanscottpotter@gmail.com"],
      subject: "NSP Studios Contact",
      react: React.createElement(ContactFormEmail, {
        fname: fname,
        lname: lname,
        senderEmail: senderEmail,
        state: state,
        projectType: projectType,
        managed: managed,
        message: message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

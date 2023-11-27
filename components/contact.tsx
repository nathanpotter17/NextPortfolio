"use client";

import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import styles from "../app/page.module.css";
import { toast } from "react-hot-toast";

export default function Contact() {
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }
        console.log(formData.get("senderEmail"));
        console.log(formData.get("message"));
        toast.success("Email sent successfully!");
      }}
      className={styles.form}
    >
      <h2 className={styles.headform}>Let's get in Touch.</h2>
      <p>Type your email and a message.</p>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="@mail.com"
          name="senderEmail"
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Hey! You know me from..."
          id="message"
          name="message"
          rows={4}
        />
      </div>
      <SubmitBtn />
    </form>
  );
}

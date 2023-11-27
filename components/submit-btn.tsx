"use client";
import { useFormStatus } from "react-dom";
import styles from "../app/page.module.css";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.button} disabled={pending}>
      {pending ? "Sending..." : "Contact Me"}
    </button>
  );
}

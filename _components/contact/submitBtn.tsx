import React, { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const [isButtonDisabled, setIsButtonDisabled] = useState(() => {
    const savedState = localStorage.getItem("session");
    return savedState === "true";
  });

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (pending) {
      timerId = setTimeout(() => {
        setIsButtonDisabled(true);
        localStorage.setItem("session", "true");
      }, 1000);
    } else {
      if (timerId) {
        clearTimeout(timerId);
      }
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [pending]);

  return (
    <button type="submit" className="btn2" disabled={isButtonDisabled}>
      {pending ? "Sending..." : "Get Free Estimate"}
    </button>
  );
}

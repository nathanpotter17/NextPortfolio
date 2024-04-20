export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const validateEmailFormat = (email: unknown): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (typeof email !== "string") {
    return false;
  }
  return emailRegex.test(email);
};

export const validateAge = (age: string): boolean => {
  if (typeof age !== "string") {
    return false;
  }

  const ageNumber = parseInt(age, 10);

  if (isNaN(ageNumber)) {
    return false;
  }

  return ageNumber >= 0 && ageNumber <= 15;
};

export const validateSelectOption = (value: string | null): boolean => {
  return value !== null && value !== "";
};

export const validatePhoneNumber = (phoneNumber: unknown): boolean => {
  const phoneNumberPattern =
    /^(\+\d{1,2}\s?)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
  if (typeof phoneNumber !== "string") {
    return false;
  }
  if (phoneNumberPattern.test(phoneNumber)) {
    return true;
  }
  return false;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

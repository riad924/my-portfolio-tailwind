import api from "./api";

export const sendContactMessage = async (contactData) => {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
  });
};
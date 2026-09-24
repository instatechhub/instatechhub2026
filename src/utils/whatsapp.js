const WHATSAPP_NUMBER = "919522886131";

export const openEnquiryOnWhatsApp = (enquiry) => {
  const message = [
    "New website enquiry - InstaTech Hub",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.number}`,
    `Service: ${enquiry.service}`,
    enquiry.budget ? `Budget: ${enquiry.budget}` : null,
    `Subject: ${enquiry.subject}`,
    `Message: ${enquiry.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

import { init, send } from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  // Don't throw here to avoid breaking dev when env not configured,
  // but send will fail and surface an error to the caller.
  console.warn("EmailJS env vars not set: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY");
}

init(PUBLIC_KEY);

export interface ContactTemplateParams {
  name: string;
  phone: string;
  package: string;
  message: string;
  submitted_from?: string;
  submitted_at?: string;
}

export function sendContactEmail(params: ContactTemplateParams) {
  return send(SERVICE_ID, TEMPLATE_ID, params);
}

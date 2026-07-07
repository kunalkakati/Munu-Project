// ── Edit this file to update business details across the whole site ──

// WhatsApp number in international format, no spaces, no leading "+".
// Example for an Indian number 98765 43210 -> "919876543210"
export const WHATSAPP_NUMBER = "917578061661"; // TODO: replace with Namita's real number

export const BUSINESS_NAME = "Namita's Little Bakehouse";
export const LOCATION = "Haribhanga, Tihu, Assam";
export const INSTAGRAM_HANDLE = "namitaslittlebakehouse"; // TODO: replace or remove if not used

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const DEFAULT_ORDER_MESSAGE =
  "Hi Namita! Cake r order ata koribo bisarisilu";

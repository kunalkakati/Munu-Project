import { waLink, DEFAULT_ORDER_MESSAGE } from "@/lib/config";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.13c-1.7 0-3.28-.47-4.63-1.28l-.33-.2-3 .79.8-2.93-.22-.3A8.1 8.1 0 0 1 3.9 12c0-4.48 3.65-8.13 8.12-8.13S20.14 7.52 20.14 12s-3.64 8.13-8.12 8.13Z" />
    </svg>
  );
}

export default function WhatsAppButton({
  message = DEFAULT_ORDER_MESSAGE,
  variant = "floating",
  label = "Order on WhatsApp",
}: {
  message?: string;
  variant?: "floating" | "inline";
  label?: string;
}) {
  if (variant === "inline") {
    return (
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex items-center gap-2 rounded-soft bg-brick px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-brick-dark"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {label}
      </a>
    );
  }

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brick px-4 py-3 text-paper shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-brick-dark md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden font-body text-sm font-semibold sm:inline">Order Now</span>
    </a>
  );
}

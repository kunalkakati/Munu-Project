import GamosaBorder from "./GamosaBorder";
import { LOCATION, INSTAGRAM_HANDLE } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <GamosaBorder className="h-4 w-full text-gold" />
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">Namita&rsquo;s Little Bakehouse</p>
            <p className="mt-2 max-w-xs font-body text-sm text-cream/70">
              Home-baked cakes made fresh to order, from a small kitchen in {LOCATION}.
            </p>
          </div>
          <div className="font-body text-sm text-cream/80">
            <p className="mb-2 font-semibold uppercase tracking-wide text-gold-light">Find us</p>
            <p>{LOCATION}</p>
            <p className="mt-1">Orders taken via WhatsApp, 10am–8pm</p>
            {INSTAGRAM_HANDLE && (
              <p className="mt-1">Instagram: @{INSTAGRAM_HANDLE}</p>
            )}
          </div>
        </div>
        <p className="mt-10 font-body text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Namita&rsquo;s Little Bakehouse. Made with care, one cake at a time.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Namita's Little Bakehouse"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="hidden font-display text-xl font-semibold tracking-tight text-ink sm:inline">
            Namita&rsquo;s <span className="text-brick">Little Bakehouse</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 font-body text-sm font-medium uppercase tracking-wide text-ink-soft sm:flex">
          <Link href="/" className="focus-ring hover:text-brick">
            Home
          </Link>
          <Link href="/cakes" className="focus-ring hover:text-brick">
            Cakes
          </Link>
          <Link href="/gallery" className="focus-ring hover:text-brick">
            Gallery
          </Link>
          <Link href="/about" className="focus-ring hover:text-brick">
            About
          </Link>
        </nav>
        <div className="hidden sm:block">
          <WhatsAppButton variant="inline" label="Order" />
        </div>
        {/* Mobile nav: kept intentionally minimal — floating WhatsApp button
            already provides one-tap ordering, so mobile just needs Cakes/About. */}
        <nav className="flex items-center gap-5 font-body text-sm font-medium uppercase tracking-wide text-ink-soft sm:hidden">
          <Link href="/cakes" className="focus-ring hover:text-brick">
            Cakes
          </Link>
          <Link href="/gallery" className="focus-ring hover:text-brick">
            Gallery
          </Link>
          <Link href="/about" className="focus-ring hover:text-brick">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

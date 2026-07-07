import type { Metadata } from "next";
import GamosaBorder from "@/components/GamosaBorder";
import CakeIllustration from "@/components/CakeIllustration";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Our Story | Namita's Little Bakehouse",
  description:
    "How a one-year home-baking journey became Namita's Little Bakehouse in Guwahati.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brick">
        Our story
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        A year of baking, one cake at a time
      </h1>

      <div className="mt-8 overflow-hidden rounded-soft border border-ink/10">
        <CakeIllustration variant="classic" className="h-56 w-full sm:h-72" />
      </div>

      <div className="mt-10 space-y-5 font-body text-base leading-relaxed text-ink-soft">
        <p>
          Namita&rsquo;s Little Bakehouse started the way most home bakeries do
          — in a home kitchen in Guwahati, with one cake baked for a family
          birthday. That cake led to a request from a neighbour, then a friend
          of a friend, and a year on, it has grown into a small bakery run
          entirely out of that same kitchen.
        </p>
        <p>
          Namita bakes everything herself, from the classic 0.5&nbsp;kg and
          1&nbsp;kg celebration cakes to the bento cakes that have become the
          bakery&rsquo;s best-seller — small enough for one person, but made
          with the same care as a cake for a hundred guests.
        </p>
        <p>
          There&rsquo;s no shop front and no large team — just Namita, her oven,
          and a phone that&rsquo;s always open for an order. She believes a cake
          made for a birthday, an anniversary, or just because, should taste
          like it was made by someone who cares — not off a factory line.
        </p>
        <p>
          One year in, the bakery is still small by design. Every order is taken
          personally over WhatsApp, so Namita can talk through flavours, sizes,
          and designs directly with the person she&rsquo;s baking for.
        </p>
      </div>

      <GamosaBorder className="mt-12 h-3 w-full text-gold" />

      <div className="mt-12 text-center">
        <h2 className="font-display text-xl font-semibold text-ink">
          Have a cake in mind?
        </h2>
        <p className="mx-auto mt-2 max-w-sm font-body text-sm leading-relaxed text-ink-soft">
          Namita would love to hear about the occasion you&rsquo;re baking for.
        </p>
        <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsAppButton variant="inline" label="Say hello on WhatsApp" />
          <a
            href="https://www.instagram.com/namita_kakati608/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-soft border border-gold px-6 py-2 font-body text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-paper"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import CakeCard from "@/components/CakeCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cakes } from "@/lib/cakes";

export const metadata: Metadata = {
  title: "Our Cakes | Namita's Little Bakehouse",
  description:
    "Bento cakes, jar cakes, classic celebration cakes, and custom theme cakes in 0.5kg and 1kg sizes.",
};

export default function CakesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:px-8 md:py-16 lg:py-20">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brick sm:text-sm">
        The menu
      </p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl md:text-4xl lg:text-5xl">
        Every cake is baked when you order it
      </h1>
      <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-ink-soft sm:text-base md:mt-4">
        Prices below are a starting guide — flavour, size, and any custom design
        will be confirmed with you over WhatsApp before you pay anything.
      </p>

      <div
        className="mt-8 sm:mt-10 md:mt-12"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(16px, 4vw, 32px)",
        }}
      >
        {cakes.map((cake) => (
          <CakeCard key={cake.name} cake={cake} />
        ))}
      </div>

      <div className="mt-10 rounded-soft border border-ink/10 bg-paper p-6 text-center sm:mt-14 sm:p-8 md:p-10">
        <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
          Don&rsquo;t see what you&rsquo;re looking for?
        </h2>
        <p className="mx-auto mt-2 max-w-lg font-body text-sm leading-relaxed text-ink-soft sm:text-base">
          Namita takes custom flavour and design requests — send a message with
          what you have in mind.
        </p>
        <div className="mt-5 flex justify-center">
          <WhatsAppButton
            variant="inline"
            label="Ask about a custom cake"
            message="Hi Namita! I have a custom cake request — could you help me with a flavour and design?"
          />
        </div>
      </div>
    </div>
  );
}

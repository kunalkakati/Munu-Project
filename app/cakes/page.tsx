import type { Metadata } from "next";
import CakeCard from "@/components/CakeCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cakes } from "@/lib/cakes";

export const metadata: Metadata = {
  title: "Our Cakes | Namita's Little Bakehouse",
  description: "Bento cakes, jar cakes, classic celebration cakes, and custom theme cakes in 0.5kg and 1kg sizes.",
};

export default function CakesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brick">
        The menu
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Every cake is baked when you order it
      </h1>
      <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
        Prices below are a starting guide — flavour, size, and any custom
        design will be confirmed with you over WhatsApp before you pay
        anything.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cakes.map((cake) => (
          <CakeCard key={cake.name} cake={cake} />
        ))}
      </div>

      <div className="mt-14 rounded-soft border border-ink/10 bg-paper p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-ink">
          Don&rsquo;t see what you&rsquo;re looking for?
        </h2>
        <p className="mx-auto mt-2 max-w-md font-body text-sm leading-relaxed text-ink-soft">
          Namita takes custom flavour and design requests — send a message
          with what you have in mind.
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

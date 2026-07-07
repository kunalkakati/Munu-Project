import CakeIllustration from "./CakeIllustration";
import WhatsAppButton from "./WhatsAppButton";
import { waLink } from "@/lib/config";

export type Cake = {
  name: string;
  description: string;
  variant: "bento" | "classic" | "jar";
  sizes: { label: string; price: string }[];
};

export default function CakeCard({ cake }: { cake: Cake }) {
  const message = `Hi Namita! I'd like to order the ${cake.name}. Could you tell me more about sizes and availability?`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-soft border border-ink/10 bg-paper transition-shadow duration-200 hover:shadow-lg focus-within:shadow-lg">
      <div className="aspect-square w-full flex-shrink-0 overflow-hidden bg-cream">
        <CakeIllustration variant={cake.variant} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <h3 className="font-display text-base font-semibold text-ink sm:text-lg md:text-xl">
          {cake.name}
        </h3>
        <p className="mt-2 flex-1 font-body text-xs leading-relaxed text-ink-soft sm:text-sm md:mt-2.5">
          {cake.description}
        </p>
        <ul className="mt-3 space-y-1 font-body text-xs text-ink sm:mt-4 sm:text-sm">
          {cake.sizes.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between border-t border-ink/10 pt-1.5 first:border-none first:pt-0"
            >
              <span>{s.label}</span>
              <span className="font-semibold">{s.price}</span>
            </li>
          ))}
        </ul>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-3 w-full rounded-soft border border-brick px-3 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-brick transition-all duration-200 hover:bg-brick hover:text-paper focus:outline-none active:scale-95 sm:mt-4 sm:px-4 sm:py-3 sm:text-sm md:mt-5"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

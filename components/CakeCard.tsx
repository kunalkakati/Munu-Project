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
    <div className="group flex flex-col overflow-hidden rounded-soft border border-ink/10 bg-paper transition-shadow hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-cream">
        <CakeIllustration variant={cake.variant} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">
          {cake.name}
        </h3>
        <p className="mt-1.5 flex-1 font-body text-sm leading-relaxed text-ink-soft">
          {cake.description}
        </p>
        <ul className="mt-4 space-y-1 font-body text-sm text-ink">
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
          className="focus-ring mt-4 inline-flex items-center justify-center rounded-soft border border-brick px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide text-brick transition-colors hover:bg-brick hover:text-paper"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

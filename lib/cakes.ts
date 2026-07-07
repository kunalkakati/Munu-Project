import type { Cake } from "@/components/CakeCard";

export const cakes: Cake[] = [
  {
    name: "Bento Cake",
    description:
      "Our best-seller — a small, mini cake in a box, perfect for one or two people, or a sweet little surprise for someone's desk.",
    variant: "bento",
    sizes: [{ label: "Mini (serves 1–2)", price: "₹170 onwards" }],
  },
  {
    name: "Classic Celebration Cake",
    description:
      "Soft, moist sponge with silky buttercream or fresh cream — chocolate, vanilla, or seasonal fruit flavours, made for birthdays and everyday celebrations.",
    variant: "classic",
    sizes: [
      { label: "0.5 kg", price: "₹350 onwards" },
      { label: "1 kg", price: "₹650 onwards" },
    ],
  },
  {
    name: "Jar Cake",
    description:
      "Layers of cake and cream, set in a jar — no cutting, no mess, just a spoon. A favourite for gifting and small gatherings.",
    variant: "jar",
    sizes: [{ label: "Single jar (200 ml)", price: "₹-- onwards" }],
  },
];

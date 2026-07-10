import type { Metadata } from "next";
import Image from "next/image";
import GamosaBorder from "@/components/GamosaBorder";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Gallery | Namita's Little Bakehouse",
  description:
    "A collection of our cakes and bakes made with care in our home kitchen.",
};

const galleryImages = [
  { src: "/cakes/cake1.jpeg", label: "Custom Design" },
  { src: "/cakes/cake2.jpeg", label: "Classic Cake" },
  { src: "/cakes/cake3.jpeg", label: "Bento Cake" },
  { src: "/cakes/cake4.jpeg", label: "Special Celebration" },
  { src: "/cakes/cake5.jpeg", label: "Freshly Baked" },
  { src: "/cakes/cake6.jpeg", label: "Jar Cake" },
  { src: "/cakes/cake7.jpeg", label: "Sweet Surprise" },
  { src: "/cakes/cake8.jpeg", label: "Mini Treat" },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brick">
        Gallery
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        A glimpse of the cakes we love to make
      </h1>
      <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
        From small bento bakes to celebratory centrepieces, every cake is baked
        with the same care and attention to detail.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-soft border border-ink/10 bg-paper shadow-sm"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={image.src}
                alt={image.label}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-3 text-center">
              <p className="font-body text-sm font-semibold text-ink">
                {image.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <GamosaBorder className="mt-12 h-3 w-full text-gold" />

      <div className="mt-12 text-center">
        <h2 className="font-display text-xl font-semibold text-ink">
          Want to see something specific?
        </h2>
        <p className="mx-auto mt-2 max-w-sm font-body text-sm leading-relaxed text-ink-soft">
          Send a message on WhatsApp and we can talk through flavours, sizes,
          and custom designs.
        </p>
        <div className="mt-5 flex justify-center">
          <WhatsAppButton variant="inline" label="Ask about a cake" />
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CakeCard from "@/components/CakeCard";
import GamosaBorder from "@/components/GamosaBorder";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cakes } from "@/lib/cakes";

const steps = [
  {
    title: "Message us on WhatsApp",
    body: "Tap \u201cOrder Now\u201d and tell us the cake, size, and flavour you'd like.",
  },
  {
    title: "Confirm the details",
    body: "We'll confirm flavour, design, price, and the date you need it by.",
  },
  {
    title: "Pick up or get it delivered",
    body: "Collect fresh from the kitchen, or get it delivered to your doorstep.",
  },
];

const heroImages = [
  { src: "/cakes/cake1.jpeg", label: "Bento Cake" },
  { src: "/cakes/cake2.jpeg", label: "Classic Cake" },
  { src: "/cakes/cake3.jpeg", label: "Jar Cake" },
  { src: "/cakes/cake4.jpeg", label: "Special Celebration" },
  { src: "/cakes/cake5.jpeg", label: "Freshly Baked" },
  { src: "/cakes/cake6.jpeg", label: "Custom Design" },
  { src: "/cakes/cake7.jpeg", label: "Sweet Surprise" },
  { src: "/cakes/cake8.jpeg", label: "Mini Treat" },
];

export default function HomePage() {
  const [activeImage, setActiveImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsFading(true);
      window.setTimeout(() => {
        setActiveImage((current) => (current + 1) % heroImages.length);
        setIsFading(false);
      }, 600);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const currentHeroImage = heroImages[activeImage];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brick">
              Baked with love at my little kitchen
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Cakes made the way a friend would bake them for you.
            </h1>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink-soft">
              Namita bakes every cake to order from her home kitchen — bento
              boxes, jar cakes, and full celebration cakes in 0.5&nbsp;kg and
              1&nbsp;kg sizes. No storefront, no middlemen — just a message on
              WhatsApp and a cake made for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton variant="inline" label="Order on WhatsApp" />
              <Link
                href="/cakes"
                className="focus-ring font-body text-sm font-semibold uppercase tracking-wide text-ink-soft underline decoration-gold decoration-2 underline-offset-4 hover:text-brick"
              >
                See the menu
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-soft border border-ink/10 bg-paper shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={currentHeroImage.src}
                  alt={currentHeroImage.label}
                  fill
                  priority
                  className={`object-cover transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"}`}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-soft bg-brick px-4 py-2 font-display text-sm font-semibold text-paper shadow-md sm:-left-8">
              {currentHeroImage.label}
            </div>
          </div>
        </div>
      </section>

      <GamosaBorder className="mx-auto h-3 w-full max-w-5xl px-5 text-gold sm:px-8" />

      {/* Cake image gallery */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brick">
              Gallery
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              A glimpse of the cakes we love to make
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroImages.map((image) => (
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
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-brick">
              Baked fresh
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
              Every order is baked after you confirm it — nothing sits on a
              shelf waiting to be sold.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold text-brick">
              Made to order
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
              Choose your size and flavour, and tell us about the occasion —
              we'll bake around it.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold text-brick">
              A personal touch
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
              You're talking to Namita directly, not a call centre — every order
              gets her attention.
            </p>
          </div>
        </div>
      </section>

      {/* Cake showcase */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              What Namita&rsquo;s baking
            </h2>
            <Link
              href="/cakes"
              className="focus-ring hidden font-body text-sm font-semibold uppercase tracking-wide text-brick hover:text-brick-dark sm:inline"
            >
              Full menu &rarr;
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cakes.map((cake) => (
              <CakeCard key={cake.name} cake={cake} />
            ))}
          </div>
          <Link
            href="/cakes"
            className="focus-ring mt-8 inline-block font-body text-sm font-semibold uppercase tracking-wide text-brick hover:text-brick-dark sm:hidden"
          >
            Full menu &rarr;
          </Link>
        </div>
      </section>

      {/* How to order */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Ordering takes three messages
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative pl-0">
              <p className="font-display text-4xl font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Celebrating something soon?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-cream/75">
            Send Namita a message on WhatsApp with your date, size, and flavour
            — she'll take it from there.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton variant="inline" label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}

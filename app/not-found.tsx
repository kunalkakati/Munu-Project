import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brick">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
        The page you were looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 rounded-soft border border-brick px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-brick transition-colors hover:bg-brick hover:text-paper"
      >
        Go back home
      </Link>
    </div>
  );
}

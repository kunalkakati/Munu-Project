type Variant = "bento" | "classic" | "jar" | "theme";

const palettes: Record<Variant, { icing: string; base: string; accent: string }> = {
  bento: { icing: "#FFFDF7", base: "#A13D2D", accent: "#A6822C" },
  classic: { icing: "#F7F1E2", base: "#7E2E22", accent: "#D9BE7F" },
  jar: { icing: "#FFFDF7", base: "#A6822C", accent: "#A13D2D" },
  theme: { icing: "#F7F1E2", base: "#A13D2D", accent: "#2E211A" },
};

// Simple, warm, flat-illustration stand-ins for product photography.
// Swap these out for real photos of Namita's cakes when available —
// see the note in the README included with this project.
export default function CakeIllustration({
  variant = "bento",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const p = palettes[variant];

  if (variant === "jar") {
    return (
      <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Illustration of a jar cake">
        <rect x="0" y="0" width="200" height="200" fill={p.icing} />
        <rect x="62" y="60" width="76" height="100" rx="8" fill="#FFFFFF" stroke={p.base} strokeWidth="3" />
        <rect x="62" y="60" width="76" height="34" fill={p.base} opacity="0.15" />
        <rect x="62" y="128" width="76" height="32" fill={p.base} opacity="0.25" />
        <path d="M62 96 Q100 84 138 96 L138 122 Q100 110 62 122 Z" fill={p.accent} opacity="0.6" />
        <circle cx="100" cy="70" r="8" fill={p.accent} />
        <rect x="58" y="50" width="84" height="12" rx="6" fill={p.base} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={`Illustration of a ${variant} cake`}>
      <rect x="0" y="0" width="200" height="200" fill={p.icing} />
      {/* plate */}
      <ellipse cx="100" cy="158" rx="70" ry="10" fill={p.base} opacity="0.12" />
      {/* cake base */}
      <rect x="55" y="95" width="90" height="55" rx="6" fill="#FFFFFF" stroke={p.base} strokeWidth="3" />
      <rect x="55" y="95" width="90" height="18" fill={p.base} opacity="0.18" />
      {/* drip / band */}
      <path
        d="M55 118 Q70 128 85 118 Q100 108 115 118 Q130 128 145 118 L145 128 Q130 138 115 128 Q100 118 85 128 Q70 138 55 128 Z"
        fill={p.accent}
        opacity="0.55"
      />
      {/* rosette */}
      <circle cx="100" cy="88" r="16" fill={p.accent} />
      <circle cx="100" cy="88" r="9" fill={p.base} />
      {/* candle for theme cakes */}
      {variant === "theme" && (
        <>
          <rect x="97" y="55" width="6" height="20" fill={p.icing === "#F7F1E2" ? "#FFFDF7" : p.base} stroke={p.base} strokeWidth="2" />
          <path d="M100 48 Q104 40 100 34 Q96 40 100 48 Z" fill={p.accent} />
        </>
      )}
      {/* little dots for texture */}
      <circle cx="70" cy="106" r="2.5" fill={p.base} />
      <circle cx="130" cy="106" r="2.5" fill={p.base} />
      <circle cx="100" cy="140" r="2.5" fill={p.base} />
    </svg>
  );
}

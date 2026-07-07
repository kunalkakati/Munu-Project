type Props = {
  className?: string;
  flip?: boolean;
};

// A woven-border motif adapted from the geometric temple/paisley patterns
// found on the anchal of an Assamese gamosa — used here as the site's
// recurring signature device instead of a generic divider or icon row.
export default function GamosaBorder({ className = "", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 480 24"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <rect width="480" height="24" fill="none" />
      {Array.from({ length: 20 }).map((_, i) => {
        const x = i * 24;
        return (
          <g key={i} transform={`translate(${x},0)`}>
            <path
              d="M12 2 L20 12 L12 22 L4 12 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

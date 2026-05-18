export default function FluxoraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Pinwheel: 4 rounded rectangular blades offset from center */}
      <rect x="12" y="2" width="4" height="10" rx="2" />
      <rect
        x="12"
        y="2"
        width="4"
        height="10"
        rx="2"
        transform="rotate(90 12 12)"
      />
      <rect
        x="12"
        y="2"
        width="4"
        height="10"
        rx="2"
        transform="rotate(180 12 12)"
      />
      <rect
        x="12"
        y="2"
        width="4"
        height="10"
        rx="2"
        transform="rotate(270 12 12)"
      />
    </svg>
  );
}

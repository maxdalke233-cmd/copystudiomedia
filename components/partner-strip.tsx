const logos = [
  { src: "/images/logo-wachstumsformel.png", alt: "Wachstumsformel" },
  { src: "/images/logo-umzugsboost.png",     alt: "UmzugsBoost" },
  { src: "/images/logo-pstudio.png",         alt: "PStudio" },
  { src: "/images/logo-clippergrip.png",     alt: "Clippergrip" },
  { src: "/images/logo-blitzwebsite.png",    alt: "Blitzwebsite" },
];

export default function PartnerStrip() {
  return (
    <div className="py-14 border-t border-white/[0.06] overflow-hidden bg-black">
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 28s linear infinite",
          }}
        >
          {/* Two sets for seamless loop */}
          {[0, 1].map((set) =>
            logos.map((logo) => (
              <div
                key={`${set}-${logo.alt}`}
                className="flex items-center shrink-0 px-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: "32px",
                    width: "auto",
                    objectFit: "contain",
                    opacity: 0.55,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// An original flat illustration of a hospital building, drawn in SVG.
function HeroIllustration() {
  return (
    <svg className="hero-svg" viewBox="0 0 520 440" role="img" aria-label="Illustration of a hospital building">
      <path
        className="art-blob"
        d="M420,90 C490,150 500,260 440,330 C380,400 260,420 170,380 C80,340 40,240 80,160 C120,80 220,40 300,50 C350,56 390,66 420,90 Z"
      />

      {/* clouds */}
      <ellipse cx="410" cy="78" rx="34" ry="12" fill="#fff" />
      <ellipse cx="432" cy="68" rx="22" ry="10" fill="#fff" />
      <ellipse cx="96" cy="130" rx="28" ry="10" fill="#fff" />

      {/* ground */}
      <rect x="40" y="360" width="440" height="14" rx="7" fill="#bfdbfe" />

      {/* side wings */}
      <rect x="86" y="226" width="80" height="134" rx="10" fill="#fff" />
      <rect x="354" y="226" width="80" height="134" rx="10" fill="#fff" />
      {[246, 292].map((y) => (
        <g key={y}>
          <rect x="106" y={y} width="40" height="28" rx="5" fill="#dbeafe" />
          <rect x="374" y={y} width="40" height="28" rx="5" fill="#dbeafe" />
        </g>
      ))}

      {/* main building */}
      <rect x="146" y="146" width="228" height="214" rx="14" fill="#fff" />
      <path d="M146,174 V160 a14,14 0 0 1 14,-14 H360 a14,14 0 0 1 14,14 V174 Z" fill="#0b5ed7" />
      {[190, 232, 274].map((y) =>
        [166, 216, 266, 316].map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="34" height="24" rx="5" fill="#dbeafe" />
        )),
      )}
      <rect x="236" y="312" width="48" height="48" rx="6" fill="#0b5ed7" />
      <path d="M260 316v44" stroke="#fff" strokeWidth="2" opacity="0.6" />

      {/* sign with cross */}
      <rect x="236" y="96" width="48" height="50" rx="12" fill="#14b8a6" />
      <path d="M260 108v26M247 121h26" stroke="#fff" strokeWidth="7" strokeLinecap="round" />

      {/* heartbeat line */}
      <path
        className="pulse-line"
        pathLength="1"
        d="M50,62 L120,62 L140,34 L162,88 L182,46 L198,62 L290,62"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* bushes */}
      <circle cx="64" cy="346" r="22" fill="#34d399" />
      <circle cx="92" cy="352" r="16" fill="#10b981" />
      <circle cx="456" cy="346" r="22" fill="#34d399" />
      <circle cx="428" cy="352" r="16" fill="#10b981" />
    </svg>
  )
}

export default HeroIllustration

// Layered SVG wave. It fills with `currentColor`, so set `color` in CSS.
function Wave({ className = '' }) {
  return (
    <svg
      className={`wave ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        opacity="0.35"
        d="M0,64 C240,120 480,0 720,48 C960,96 1200,120 1440,56 L1440,120 L0,120 Z"
      />
      <path
        fill="currentColor"
        opacity="0.6"
        d="M0,88 C240,40 480,120 720,84 C960,48 1200,32 1440,84 L1440,120 L0,120 Z"
      />
      <path
        fill="currentColor"
        d="M0,104 C300,72 540,120 780,104 C1020,88 1260,80 1440,104 L1440,120 L0,120 Z"
      />
    </svg>
  )
}

export default Wave

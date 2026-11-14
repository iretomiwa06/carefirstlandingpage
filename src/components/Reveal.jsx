import { useEffect, useRef, useState } from 'react'

// Fades and slides its children in when they scroll into view.
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const supported = typeof IntersectionObserver !== 'undefined'

  useEffect(() => {
    const el = ref.current
    if (!el || !supported) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [supported])

  return (
    <div
      ref={ref}
      className={`reveal ${shown || !supported ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal

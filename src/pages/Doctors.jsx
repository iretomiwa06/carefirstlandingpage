import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import DoctorCard from '../components/DoctorCard'
import CtaBanner from '../components/CtaBanner'
import { doctors } from '../data'

const specialties = ['All', ...new Set(doctors.map((d) => d.specialty))]

function Doctors() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? doctors : doctors.filter((d) => d.specialty === filter)

  return (
    <>
      <PageHero
        title="Our Doctors"
        subtitle="Meet the specialists who look after our patients every day."
      />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter by specialty">
            {specialties.map((s) => (
              <button
                key={s}
                type="button"
                className={`filter-btn ${filter === s ? 'active' : ''}`}
                aria-pressed={filter === s}
                onClick={() => setFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {visible.map((d, i) => (
              <Reveal key={`${filter}-${d.name}`} delay={(i % 3) * 90}>
                <DoctorCard doctor={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}

export default Doctors

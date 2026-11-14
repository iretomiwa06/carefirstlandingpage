import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import CtaBanner from '../components/CtaBanner'
import { services } from '../data'

function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Specialist departments under one roof, so your care stays joined up from the first visit to follow-up."
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 90}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}

export default Services

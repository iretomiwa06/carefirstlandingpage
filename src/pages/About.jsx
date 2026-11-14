import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { values, timeline } from '../data'

function About() {
  return (
    <>
      <PageHero
        title="About CareFirst"
        subtitle="A community hospital built on one simple idea: everyone deserves care that is quick, kind and close to home."
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="split-title">Caring for our community since 2008</h2>
            <p className="body-text">
              CareFirst began as a 20-bed clinic with eight doctors. Today we are a full-service
              hospital with specialist departments, a modern laboratory and a 24/7 emergency unit.
            </p>
            <p className="body-text">
              Our mission is to make good healthcare easy to reach: short waits, clear
              explanations and fair prices.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel">
              <h3>Our mission</h3>
              <p>To deliver safe, compassionate and affordable healthcare to every family we serve.</p>
              <h3 className="panel-second">Our vision</h3>
              <p>A healthier community where no one delays treatment because care feels out of reach.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Our values" />
          <div className="grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className="card service-card">
                  <span className="icon-bubble"><Icon name={v.icon} size={26} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our journey" title="Growing with our community" />
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 60} className="tl-item">
                <strong>{t.year}</strong>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

export default About

import { Link } from 'react-router-dom'
import HeroIllustration from '../components/HeroIllustration'
import Wave from '../components/Wave'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import SectionHead from '../components/SectionHead'
import ServiceCard from '../components/ServiceCard'
import DoctorCard from '../components/DoctorCard'
import CtaBanner from '../components/CtaBanner'
import { services, doctors, testimonials, stats, reasons } from '../data'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill"><span className="dot" /> Open 24/7 · Emergency care</span>
            <h1>
              Quality care, <span className="grad">close to home</span>
            </h1>
            <p className="lead">
              Trusted doctors, modern facilities and a team that treats you like family. Book a
              visit in a minute and skip the queue.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn">
                Book an appointment <Icon name="arrow" size={18} />
              </Link>
              <Link to="/services" className="btn btn-ghost">Our services</Link>
            </div>
            <ul className="trust">
              <li><Icon name="check" size={16} /> Certified specialists</li>
              <li><Icon name="check" size={16} /> Modern equipment</li>
              <li><Icon name="check" size={16} /> Insurance accepted</li>
            </ul>
          </div>

          <div className="hero-art">
            <HeroIllustration />
            <div className="chip chip-a">
              <span className="chip-icon"><Icon name="clock" size={18} /></span>
              <div><strong>Open 24/7</strong><small>Emergency unit</small></div>
            </div>
            <div className="chip chip-b">
              <span className="chip-icon alt"><Icon name="users" size={18} /></span>
              <div><strong>50+ doctors</strong><small>Across 12 specialties</small></div>
            </div>
          </div>
        </div>
        <Wave />
      </section>

      <section className="stats">
        <div className="container">
          <Reveal className="stats-card">
            {stats.map((s) => (
              <div key={s.label}>
                <strong><CountUp end={s.end} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What we do"
            title="Care for every stage of life"
            text="From newborn checks to heart health, our departments work together so you never have to repeat your story."
          />
          <div className="grid-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
          <div className="center-action">
            <Link to="/services" className="btn btn-ghost">See all services</Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Why CareFirst</span>
            <h2 className="split-title">Healthcare that puts you first</h2>
            <ul className="features">
              {reasons.map((r) => (
                <li key={r.title}>
                  <span className="icon-bubble sm"><Icon name={r.icon} size={22} /></span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel">
              <h3>Same-day appointments</h3>
              <p>Pick a department, choose a time that suits you and we will confirm by phone or email.</p>
              <svg className="panel-pulse" viewBox="0 0 300 60" aria-hidden="true">
                <path
                  className="pulse-line"
                  pathLength="1"
                  d="M0,30 L70,30 L88,8 L108,52 L126,18 L140,30 L300,30"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link to="/contact" className="btn btn-light">Reserve my slot</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our team"
            title="Meet some of our doctors"
            text="Experienced specialists who take the time to listen."
          />
          <div className="grid-3">
            {doctors.slice(0, 3).map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <DoctorCard doctor={d} />
              </Reveal>
            ))}
          </div>
          <div className="center-action">
            <Link to="/doctors" className="btn btn-ghost">View all doctors</Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHead
            eyebrow="Patient stories"
            title="What our patients say"
          />
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="card testimonial">
                  <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

export default Home

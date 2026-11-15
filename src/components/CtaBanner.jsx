import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Icon from './Icon'

function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <h2>Need to see a doctor today?</h2>
          <p>Book online in a minute, or call our 24/7 line and we will take it from there.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-light">
              Book an appointment <Icon name="arrow" size={18} />
            </Link>
            <a href="tel:08144815137" className="btn btn-outline-light">
              <Icon name="phone" size={18} /> 0814-481-5137
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CtaBanner

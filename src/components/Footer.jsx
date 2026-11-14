import { Link } from 'react-router-dom'
import Wave from './Wave'
import Icon from './Icon'

const year = new Date().getFullYear()

function Footer() {
  return (
    <>
      <Wave className="footer-wave" />
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-logo">CareFirst Hospital</p>
            <p>Trusted doctors, modern facilities and compassionate care, day and night.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Our doctors</Link></li>
              <li><Link to="/contact">Book an appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4>Opening hours</h4>
            <ul>
              <li>Clinics: Mon – Sat, 8am – 6pm</li>
              <li>Pharmacy: Daily, 7am – 10pm</li>
              <li>Emergency: 24 hours</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Icon name="pin" size={16} /> 14 Wellness Avenue, Lagos</li>
              <li><Icon name="phone" size={16} /> 0800-000-0000</li>
              <li><Icon name="mail" size={16} /> care@carefirst.example</li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">© {year} CareFirst Hospital. A practice project built with React.</p>
      </footer>
    </>
  )
}

export default Footer

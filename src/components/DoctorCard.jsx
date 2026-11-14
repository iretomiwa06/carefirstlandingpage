import { Link } from 'react-router-dom'
import Icon from './Icon'

function initials(name) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function DoctorCard({ doctor }) {
  return (
    <article className="card doctor-card">
      <div className="avatar" style={{ '--h': doctor.hue }}>
        {initials(doctor.name)}
      </div>
      <h3>{doctor.name}</h3>
      <p className="specialty">{doctor.specialty}</p>
      <ul className="meta">
        <li><Icon name="award" size={16} /> {doctor.years} years experience</li>
        <li><Icon name="clock" size={16} /> {doctor.available}</li>
      </ul>
      <Link to="/contact" className="btn btn-ghost btn-sm">Book a visit</Link>
    </article>
  )
}

export default DoctorCard

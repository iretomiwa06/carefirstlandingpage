import Icon from './Icon'

function ServiceCard({ icon, name, desc }) {
  return (
    <article className="card service-card">
      <span className="icon-bubble">
        <Icon name={icon} size={26} />
      </span>
      <h3>{name}</h3>
      <p>{desc}</p>
    </article>
  )
}

export default ServiceCard

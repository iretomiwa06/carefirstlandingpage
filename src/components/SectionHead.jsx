import Reveal from './Reveal'

function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export default SectionHead

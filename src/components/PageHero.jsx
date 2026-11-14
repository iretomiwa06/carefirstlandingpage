import Wave from './Wave'

function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Wave />
    </section>
  )
}

export default PageHero

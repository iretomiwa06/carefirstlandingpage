import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="big-404">404</p>
        <h1>We couldn't find that page</h1>
        <p>The page may have moved, or the link might be mistyped.</p>
        <Link to="/" className="btn">Back to home</Link>
      </div>
    </section>
  )
}

export default NotFound

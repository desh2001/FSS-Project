export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Modern clothes for everyday life</h1>
          <p>Comfortable, sustainable and designed to last. Shop the new collection tailored for you.</p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">Shop now</a>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <div className="mock-card">New season styles</div>
        </div>
      </div>
    </section>
  )
}

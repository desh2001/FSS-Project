import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section className="container">
          <h2 className="section-title">Featured products</h2>
          <FeaturedProducts />
        </section>
      </main>
    </div>
  )
}

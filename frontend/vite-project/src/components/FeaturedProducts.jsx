const demo = [
  { id: 1, title: 'Everyday Tee', price: '$29' },
  { id: 2, title: 'Classic Shirt', price: '$49' },
  { id: 3, title: 'Weekend Hoodie', price: '$69' },
  { id: 4, title: 'Slim Jeans', price: '$79' },
]

export default function FeaturedProducts(){
  return (
    <div id="products" className="products-grid">
      {demo.map(p=> (
        <article key={p.id} className="product-card">
          <div className="product-thumb" />
          <h3>{p.title}</h3>
          <div className="price">{p.price}</div>
          <button className="btn-outline">View</button>
        </article>
      ))}
    </div>
  )
}

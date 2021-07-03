function Products({ img, title, price }) {
  return (
    <article className="content">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{price}</h4>
      <button className="btn">Add to Cart</button>
    </article>
  )
}

export default Products

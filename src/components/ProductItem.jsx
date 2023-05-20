export default function ProdutItem({ product }) {
  return (
    <div className="card">
      <img className="card-img-top" src={product.image} alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
        {product.description ? (
          <p className="card-text">{product.description}</p>
        ) : null}
        <a href="/" className="btn btn-primary">
          Add to card
        </a>
      </div>
    </div>
  );
}

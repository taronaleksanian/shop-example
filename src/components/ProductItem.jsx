import productImage from "../assets/product.jpg";

export default function ProdutItem({ product }) {
  return (
    <div className="card">
      <img className="card-img-top" src={productImage} alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
        {product.info ? <p className="card-text">{product.info}</p> : null}
        <a href="/" className="btn btn-primary">
          Add to card
        </a>
      </div>
    </div>
  );
}

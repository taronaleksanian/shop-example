import products from "../mock/products";
import ProdutItem from "./ProductItem";

export default function ProductsList() {
  return (
    <>
      <h2 className="text-center">Products</h2>
      <div className="row mt-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mt-3">
            <ProdutItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

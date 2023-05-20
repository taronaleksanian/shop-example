import { useEffect, useState } from "react";
import ProdutItem from "./ProductItem";
import { API_BASE_URL } from "../config";

export default function ProductsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        if (!response.ok) throw data;
        setProducts(data);
      } catch {
        console.error("Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="text-center">Products</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="row mt-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mt-3">
              <ProdutItem product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import { useEffect } from "react";
import { IProduct } from "./models/IProduct";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5181/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductList products={products} />;
}

export default App;

import { useState } from "react";
import { useEffect } from "react";
import { IProduct } from "./models/IProduct";
import ProductList from "./components/ProductList";
import ButtonUsage from "./components/ButtonUsage";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5181/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
      <ButtonUsage />
    </>
  );
}

export default App;

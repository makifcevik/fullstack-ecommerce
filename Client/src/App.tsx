import { useState } from "react";
import { useEffect } from "react";
import { IProduct } from "./models/IProduct";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { Container, CssBaseline } from "@mui/material";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5181/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <ProductList products={products} />
      </Container>
    </>
  );
}

export default App;

import { useState } from "react";
import { useEffect } from "react";
import { IProduct } from "../../models/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";

const CatalogPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5181/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return <ProductList products={products} />;
};

export default CatalogPage;

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../models/IProduct";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5181/api/Products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h5>Loading...</h5>;
  if (!product) return <h5>Product not found!</h5>;

  return <Typography variant='h2'>{product.name}</Typography>;
};

export default ProductDetailsPage;

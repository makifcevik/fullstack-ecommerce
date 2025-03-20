import { Grid2 } from "@mui/material";
import { IProduct } from "../../models/IProduct";
import Product from "./Product";

interface Props {
  products: IProduct[];
}

const ProductList = ({ products }: Props) => {
  return (
    <>
      <Grid2 container spacing={2}>
        {products.map((product: IProduct) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Product product={product} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default ProductList;

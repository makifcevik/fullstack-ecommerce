import { IProduct } from "../models/IProduct";
import Product from "./Product";

interface Props {
  products: IProduct[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

import { IProduct } from "../models/IProduct";

interface Props {
  product: IProduct;
}

function Product({ product }: Props) {
  return (
    <ul>
      <li>{product.name}</li>
      <li>{product.price}</li>
    </ul>
  );
}

export default Product;

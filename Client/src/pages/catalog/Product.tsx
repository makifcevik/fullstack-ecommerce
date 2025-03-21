import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IProduct } from "../../models/IProduct";
import { AddShoppingCart, Search } from "@mui/icons-material";
import { Link } from "react-router";
import { PATHS } from "../../router/Routes";

interface Props {
  product: IProduct;
}

function Product({ product }: Props) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        image={`http://localhost:5181/images/${product.imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='h2' color='text.secondary'>
          {product.name}
        </Typography>
        <Typography variant='body2' color='secondary'>
          {product.price} ₺
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='outlined'
          size='small'
          color='success'
          startIcon={<AddShoppingCart />}
        >
          Add to cart
        </Button>
        <Button
          component={Link}
          to={PATHS.PRODUCT_DETAILS(product.id)}
          variant='outlined'
          size='small'
          startIcon={<Search />}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;

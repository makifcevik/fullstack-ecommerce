import { NavLink } from "react-router";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ROUTES } from "../router/Routes";
import { ShoppingCart } from "@mui/icons-material";

const links = [
  { title: "Home", to: ROUTES.HOME },
  { title: "Catalog", to: ROUTES.CATALOG },
  { title: "About", to: ROUTES.ABOUT },
  { title: "Contact", to: ROUTES.CONTACT },
];

const navItemStyles = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "text.primary",
  },
  "&.active": {
    color: "warning.main",
  },
};

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant='h6'>E-Commerce</Typography>
          <Stack direction='row' sx={{ display: "flex" }}>
            {links.map((item) => (
              <Button
                key={item.title}
                sx={navItemStyles}
                component={NavLink}
                to={item.to}
              >
                {item.title}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box>
          <IconButton size='large' edge='start' color='inherit'>
            <Badge badgeContent='2' color='warning'>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

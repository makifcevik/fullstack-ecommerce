import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Container>
          <Typography variant='h6'>E-Commerce</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

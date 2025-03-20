import Navbar from "./components/Navbar";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;

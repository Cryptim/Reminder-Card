import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/styledNavbar";
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default Home;

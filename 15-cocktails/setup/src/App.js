import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import SharedLayout from "./pages/sharedLayout";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <Router>
      <Navbar />
      <Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Route>
    </Router>
  );
}

export default App;

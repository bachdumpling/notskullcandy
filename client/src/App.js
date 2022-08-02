import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import ProductPage from "./Components/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App bg-black">
        <Switch>
          <Route path="/home">
            <Hero />
            <Trending />
          </Route>
        </Switch>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          {/* <Route path="/product">
            <ProductPage />
          </Route> */}
        </Switch>
        <Footer />
        <ProductPage/>
      </div>
    </Router>
  );
}

export default App;

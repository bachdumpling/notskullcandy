import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import ProductPageCard from './Components/ProductPageCard.js'
import Cart from "./Components/Cart";
import WelcomePage from "./Components/WelcomePage";

function App() {
  const [oneProductData, setOneProductData] = useState({
    "name": "",
    "price": "",
    "img_url": "",
    "product_img": "",
    "description": "",
    "avg_rating": "",
    "reviews": []
  })
  const [user, setUser] = useState(null);

  function getOneProduct(product) {
    setOneProductData(product)
  }

  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      })
  }, []);

  //uncomment when finished testing.. add element inside
  // navbar to display the user logged in

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <Router>
      <Navbar user={user} />
      <div className="App bg-black">
        <Switch>
          <Route path="/home">
            <Hero />
            <Trending />
          </Route>
        </Switch>

        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>

          <Route path="/shop">
            <Shop getOneProduct={getOneProduct} />
          </Route>

          <Route path="/products/:id">
            <ProductPageCard user={user}/>
          </Route>

          <Route path={"/cart"}>
            <Cart />
          </Route>

          <Route path={"/user"}>
            <WelcomePage user={user} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

<<<<<<< HEAD
import React , {useState, useEffect} from "react";
=======
import React, { useState } from "react";
>>>>>>> afd06dc (cart)
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import ProductPageCard from './Components/ProductPageCard.js'
import Cart from "./Components/Cart";

function App() {
  const [oneProductData, setOneProductData] = useState({})
<<<<<<< HEAD
  const [user, setUser] = useState(null);

=======
  console.log(oneProductData)
>>>>>>> afd06dc (cart)

  function getOneProduct(product) {
    setOneProductData(product)
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
 
  //uncomment when finished testing.. add element inside
  // navbar to display the user logged in
  
  // if (!user) return <Login onLogin={setUser} />;

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
            <Shop getOneProduct={getOneProduct} />
          </Route>

          <Route path="/products/:id">
            <ProductPageCard productData={oneProductData} />
          </Route>

          <Route path={"/cart"}>
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

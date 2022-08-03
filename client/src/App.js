import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import ProductPageCard from './Components/ProductPageCard.js'

function App() {
  const [oneProductData, setOneProductData] = useState({})
  // let oneProductData
  // let setOneProductData
  console.log(oneProductData)

  function getOneProduct(product) {
    setOneProductData(product)
  }

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
            <ProductPageCard productData={oneProductData}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

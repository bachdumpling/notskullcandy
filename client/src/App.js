import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <Trending />
      <Footer />
      <Login />
    </div>
  );
}

export default App;

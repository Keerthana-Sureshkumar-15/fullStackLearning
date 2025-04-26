import React from "react";
//if no defalut added near eport need to use {} while impoting
// import {FirstComponent} from './components/FirstComponent';
//if we have default
import FirstComponent from "./components/FirstComponent";
import Product from "./components/Product";
import Counter from "./components/Counter";
import Home from "./components/routing/Home";
import About from "./components/routing/About";
import Contact from "./components/routing/Contact";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const productDetails = {
    name: "Product1",
    price: 1000,
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/* <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      Hello World
      <hr></hr>
      {/* <FirstComponent></FirstComponent> */}
      {/* props example */}
      {/* <Product name={productDetails.name} price={productDetails.price}></Product> */}
      {/* <Counter></Counter> */}
      {/* one type of example for routing using reat routing, reacch routing is easy then this */}
      <Router>
        <Link to="/">Home</Link> |<Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* using compontent directly */}
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartPage from "./components/CartPage";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Apple",
      price: 25,
      image: "/apple.jpg",
      quantity: 0,
    },
    {
      id: 2,
      title: "Indian Guava",
      price: 15,
      image: "/guava.jpg",
      quantity: 0,
    },
    {
      id: 3,
      title: "Pineapple",
      price: 30,
      image: "/pineapple.jpg",
      quantity: 0,
    },
    {
      id: 4,
      title: "Strawberry",
      price: 10,
      image: "/strawberry.jpg",
      quantity: 0,
    },
    {
      id: 5,
      title: "Pomogranate",
      price: 25,
      image: "/pomo.jpg",
      quantity: 0,
    },
    {
      id: 6,
      title: "Orange",
      price: 15,
      image: "/orange.jpg",
      quantity: 0,
    },
    {
      id: 7,
      title: "Water melon",
      price: 40,
      image: "/melon.jpg",
      quantity: 0,
    },
    {
      id: 8,
      title: "Peach",
      price: 20,
      image: "/peach.jpg",
      quantity: 0,
    },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (product, removeAll = false) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (removeAll) {
        updatedCart.splice(existingItemIndex, 1);
      } else {
        updatedCart[existingItemIndex].quantity++;
      }
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    setCart(updatedCart);
  };
  const removeAllFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <Switch>
          <Route path="/" exact>
            <Header />
            <section className="py-5">
              <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      removeAllFromCart={removeAllFromCart}
                      cart={cart}
                    />
                  ))}
                </div>
              </div>
            </section>
          </Route>
          <Route path="/cart">
            <CartPage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              removeAllFromCart={removeAllFromCart}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

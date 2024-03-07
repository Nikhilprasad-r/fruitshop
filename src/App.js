import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Product from "./components/Product";
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
      image: "./public/orange.jpg",
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
  return (
    <Router>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </Router>
  );
}

export default App;

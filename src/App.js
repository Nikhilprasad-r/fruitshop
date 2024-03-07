import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Apple",
      price: 25,
      image: "./public/apple.jpg",
      quantity: 0,
    },
    {
      id: 2,
      title: "Indian Guava",
      price: 15,
      image: "./public/guava.jpg",
      quantity: 0,
    },
    {
      id: 3,
      title: "Pineapple",
      price: 30,
      image: "./public/pineapple.jpg",
      quantity: 0,
    },
    {
      id: 4,
      title: "Strawberry",
      price: 10,
      image: "./public/strawberry.jpg",
      quantity: 0,
    },
    {
      id: 5,
      title: "Pomogranate",
      price: 25,
      image: "./public/pomo.jpg",
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
      image: "./public/melon.jpg",
      quantity: 0,
    },
    {
      id: 8,
      title: "Peach",
      price: 20,
      image: "./public/peach.jpg",
      quantity: 0,
    },
  ]);
  return <></>;
}

export default App;

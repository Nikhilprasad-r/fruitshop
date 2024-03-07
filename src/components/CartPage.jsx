import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function CartPage({ cart,removeFromCart,removeAllFromCart,addToCart }) {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
           <img src={item.image} height={50} alt="" /> {item.title} - ₹{item.price.toFixed(2)}  
           
           <IoAddCircleSharp size={35}onClick={() => addToCart(item)}/>
           {item.quantity}
           <FaMinusCircle size={30} onClick={() => removeFromCart(item.id)}/>
           = ₹{item.price * item.quantity}
           <MdDeleteForever size={25} onClick={() => removeAllFromCart(item.id)}/>
          
          
          </li>
        ))}
      </ul>
      <p>Total: ₹{getTotal().toFixed(2)}</p>
    </div>
  );
}

export default CartPage;

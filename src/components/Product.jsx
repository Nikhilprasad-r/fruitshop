import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

function Product({ product, addToCart, removeFromCart,removeAllFromCart,cart }) {
  const { title, price, id,quantity } = product;
console.log(quantity);
  return (
    <div className="col mb-5">
      <div className="card h-100">
        
        <img className="card-img-top" src={product.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            ₹{price.toFixed(2)}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
         
              
            
            {cart.find(item => item.id === id) ? (
                  <button className="btn btn-outline-danger mt-2" onClick={() => removeAllFromCart(id)}>Remove All</button>
                ):( <button className="btn btn-outline-dark mt-2" onClick={() => addToCart(product)}>
                Add to Cart
              </button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
  return (
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
        <h1 className="display-4 fw-bolder">Fruit Basket</h1>
        <p className="lead fw-normal text-white-50 mb-0">Add our products to your cart</p>
      </div>
    </div>
  </header>
    
  )
}

export default Header
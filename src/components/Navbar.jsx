import React from 'react'
import { BsCart4 } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const Navbar = ({cart}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Fruit Basket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Link className="btn btn-outline-dark nav-link" to="/cart"><BsCart4 size={25}/> <span className="badge bg-dark text-white">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
</Link>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"></li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex"><Link className="btn btn-outline-dark nav-link" to="/cart"><BsCart4 size={30}/> <span className="badge bg-dark text-white">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
</Link>
              
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
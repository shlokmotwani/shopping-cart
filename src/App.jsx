import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <div id="app-wrapper">
      <nav id="header-wrapper">
        <Link to="/">ShopKart</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="products">Shop</Link>
        </div>
        <Link to="cart">Cart {itemsInCart.length}</Link>
      </nav>
      <div id="content-wrapper">
        {itemsInCart.length !==0 && <p>Items are in cart</p>}
        <Outlet context={setItemsInCart}/>
      </div>
      <div id="footer-wrapper">
        <p>Created by shlok.codes</p>
      </div>
    </div>
  );
}

export { App };

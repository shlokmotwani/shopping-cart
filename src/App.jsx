import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app-wrapper">
      <nav id="header-wrapper">
        <Link to="/">ShopKart</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="products">Shop</Link>
        </div>
        <Link to="cart">Cart</Link>
      </nav>
      <div id="content-wrapper">
        <Outlet />
      </div>
      <div id="footer-wrapper">
        <p>Created by shlok.codes</p>
      </div>
    </div>
  );
}

export { App };

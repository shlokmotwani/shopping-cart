import { useState } from "react";
import "./App.css";
import NavButton from "./assets/components/NavButton";
import { HomePage } from "./assets/pages/HomePage";
import { ProductPage } from "./assets/pages/ProductPage";
import { CartPage } from "./assets/pages/CartPage";

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  function handlePageSwitch() {
    switch (pageIndex) {
      case 0:
        return <HomePage />;
      case 1:
        return <ProductPage />;
      case 2:
        return <CartPage />;
    }
  }
  return (
    <div id="app-wrapper">
      <nav id="header-wrapper">
      <NavButton
            name="ShopKart"
            handleClick={() => setPageIndex(0)}
          ></NavButton>
        <div id="hdr-cntr-btn-grp">
          <NavButton
            name="Home"
            handleClick={() => setPageIndex(0)}
          ></NavButton>
          <NavButton
            name="Shop"
            handleClick={() => setPageIndex(1)}
          ></NavButton>
        </div>

        <NavButton name="Cart" handleClick={() => setPageIndex(2)}></NavButton>
      </nav>
      <div id="content-wrapper">{handlePageSwitch()}</div>
      <div id="footer-wrapper">
        <p>Created by shlok.codes</p>
      </div>
    </div>
  );
}

export { App };

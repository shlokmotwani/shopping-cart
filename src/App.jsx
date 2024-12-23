import "./App.css";
import NavButton from "./assets/components/NavButton";

function App() {
  return (
    <div id="app-wrapper">
      <nav id="header-wrapper">
        <span>ShopKart</span>
        <div id="hdr-cntr-btn-grp">
          <NavButton name="Home"></NavButton>
          <NavButton name="Shop"></NavButton>
        </div>

        <span>Cart</span>
      </nav>
      <div id="content-wrapper">
        <p>Content Display</p>
      </div>
      <div id="footer-wrapper">
        <p>Created by shlok.codes</p>
      </div>
    </div>
  );
}

export { App };

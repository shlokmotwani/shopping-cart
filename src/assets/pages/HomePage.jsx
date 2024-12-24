import "../styles/homepage.css";
import cart from "../../../public/shopping-cart.png";

function HomePage() {
  return (
    <div id="homepage-wrapper">
      <div id="homepage-left">
        <h1>ShopKart</h1>
        <p>Your one stop destination for all your needs.</p>
      </div>
      <div id="homepage-right">
        <img src={cart} alt="" />
      </div>
    </div>
  );
}

export { HomePage };

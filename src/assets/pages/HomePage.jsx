import "../styles/homepage.css";
import cart from "../../../src/shopping-cart.png";

function HomePage() {
  return (
    <div id="homepage-wrapper">
      <div id="homepage-left">
        <h1>ShopKart</h1>
        <p data-testid="homepage-description">Your one stop destination for all your needs.</p>
      </div>
      <div id="homepage-right">
        <img src={cart} alt="Cart image" data-testid="homepage-image"/>
      </div>
    </div>
  );
}

export { HomePage };

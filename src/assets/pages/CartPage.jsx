import { useOutletContext } from "react-router-dom";
import { CheckoutCard } from "../components/CheckoutCard";
import "../styles/cart-page.css";

function CartPage() {
  const [itemsInCart] = useOutletContext();
  let total = 0;
  if(itemsInCart.length > 0){
    return (
      <div id="cart-page-wrapper">
        <h1>Checkout</h1>
        <div id="cart-wrapper">
          {itemsInCart.map((product) => {
            total += product.item.price * product.quantity;
            return (
              <CheckoutCard
                key={product.item.id}
                item={product.item}
                quantity={product.quantity}
              />
            );
          })}
        </div>
        <h3>Total: ${Math.ceil(total)}</h3>
      </div>
    );
  }
  else{
    return(
      <p>Cart empty!</p>
    );
  }
}

export { CartPage };

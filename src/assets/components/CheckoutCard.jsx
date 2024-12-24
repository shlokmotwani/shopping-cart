import PropTypes from "prop-types";
import "../styles/checkout-card.css";

function CheckoutCard({item, quantity}) {
  return (
    <div className="checkout-card">
      <div className="checkout-card-img-grp">
          <img src={item.thumbnailURL} alt="" />
          <p className="product-title">{item.title}</p>
      </div>
      <div>
          <p>Price: ${item.price}</p>
          <div className="qty">
            <p className="added-text">Qty: {quantity}</p>
          </div>
          <p>Amount: ${item.price * quantity}</p>
      </div>
    </div>
  );
}

CheckoutCard.propTypes = {
  item: PropTypes.shape({
    thumbnailURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  quantity: PropTypes.number,
};

export { CheckoutCard };

import PropTypes from "prop-types";
import "../styles/card.css";
import { useState } from "react";

function Card({ item, handleAdd }) {
  const [addBtnClicked, setAddBtnClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);


  function handleAddBtnClick() {
    setAddBtnClicked(true);
  }

  function handleCancelBtnClick() {
    setAddBtnClicked(false);
    setQuantity(0);
  }

  function handleConfirmBtnClick(item) {
    setAddBtnClicked(false);
    if(quantity <= 0){
      return;
    }
    handleAdd(item, quantity);
    setIsAdded(true);
  }

  function handleQtyChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <div data-testid="product-card" className="card">
      <img src={item.thumbnailURL} alt="" />
      <p data-testid="product-title" className="product-title">{item.title}</p>
      <span data-testid="product-description" >{item.description}</span>
      <p data-testid="product-price" >Price: ${item.price}</p>
      <div data-testid="product-qty" className="qty">
        {!addBtnClicked && !isAdded && <button onClick={handleAddBtnClick}>Add</button>}
        {!addBtnClicked && isAdded && <p className="added-text">Added in your cart</p>}
        {addBtnClicked && (
          <>
            <input type="number" value={quantity} onChange={handleQtyChange} />
            <button onClick={()=>handleConfirmBtnClick(item)}>OK</button>
            <button onClick={handleCancelBtnClick}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    thumbnailURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  handleAdd: PropTypes.func,
};

export { Card };

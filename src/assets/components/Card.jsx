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
    if(quantity == 0){
      return;
    }
    // console.log(item.title);
    handleAdd(item, quantity);
    setIsAdded(true);
  }

  function handleQtyChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className="card">
      <img src={item.thumbnailURL} alt="" />
      <p className="product-title">{item.title}</p>
      <span>{item.description}</span>
      <p>Price: ${item.price}</p>
      <div className="qty">
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

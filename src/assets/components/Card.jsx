import PropTypes from "prop-types";
import "../styles/card.css";
import { useState } from "react";

function Card({ item, handleAdd }) {
  const [addBtnClicked, setAddBtnClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);


  function handleAddBtnClick() {
    setAddBtnClicked(true);
  }

  function handleCancelBtnClick() {
    setAddBtnClicked(false);
    setQuantity(0);
  }

  function handleConfirmBtnClick(item) {
    console.log(item.title);
    handleAdd(item, quantity);
    setAddBtnClicked(false);
  }

  function handleQtyChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className="card">
      <img src={item.thumbnailURL} alt="" />
      <p>{item.title}</p>
      <span>{item.description}</span>
      <p>Price: ${item.price}</p>
      <div className="qty">
        {!addBtnClicked && <button onClick={handleAddBtnClick}>Add</button>}
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

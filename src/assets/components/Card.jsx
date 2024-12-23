import PropTypes from "prop-types";
import "../styles/card.css";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.thumbnailURL} alt="" />
      <p>{item.title}</p>
      <span>{item.description}</span>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    thumbnailURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export { Card };

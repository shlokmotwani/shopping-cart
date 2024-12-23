import PropTypes from 'prop-types';

function NavButton({ name, handleClick }) {
  return <button onClick={handleClick}>{name}</button>
}

NavButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default NavButton;
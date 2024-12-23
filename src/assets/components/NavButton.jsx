import PropTypes from 'prop-types';

function NavButton({ name }) {
  return <button>{name}</button>
}

NavButton.propTypes = {
  name: PropTypes.string.isRequired,
}

export default NavButton;
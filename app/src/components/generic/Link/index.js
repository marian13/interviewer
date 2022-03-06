import PropTypes from 'prop-types';

const Link = ({ text, path }) => (
  /**
   * For "noopener noreferrer" check:
   * https://github.com/yannickcr/eslint-plugin-react/issues/2054
   */
  <a href={path} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

Link.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Link;

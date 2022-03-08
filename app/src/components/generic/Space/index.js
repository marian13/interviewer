import PropTypes from 'prop-types';

import times from 'lodash/times';

const Space = ({ count }) => times(count, () => ' ')

Space.propTypes = {
  count: PropTypes.number
}

Space.defaultProps = {
  count: 1
}

export default Space;

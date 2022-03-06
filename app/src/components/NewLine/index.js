import PropTypes from 'prop-types';

import times from 'lodash/times';

const NewLine = ({ count }) => times(count, () => <br />)

NewLine.propTypes = {
  count: PropTypes.number
}

NewLine.defaultProps = {
  count: 1
}

export default NewLine;

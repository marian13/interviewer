import PropTypes from 'prop-types';

import times from 'lodash/times';

const NewLine = ({ count }) => times(count, (index) => <br key={index} />)

NewLine.propTypes = {
  count: PropTypes.number
}

NewLine.defaultProps = {
  count: 1
}

export default NewLine;

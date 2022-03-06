import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/Badge';

const Keyword = ({ keyword }) => (
  <h5 style={{ display: 'inline-block' }}>
    <Badge pill bg="light" text="dark">
      {keyword}
    </Badge>
  </h5>
);

Keyword.propTypes = {
  keyword: PropTypes.string.isRequired
};

export default Keyword;

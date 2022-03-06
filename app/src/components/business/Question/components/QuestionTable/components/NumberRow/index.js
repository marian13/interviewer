import PropTypes from 'prop-types';

const NumberRow = ({ renderContent }) => (
  <tr>
    <th>#</th>
    <th>{renderContent()}</th>
  </tr>
);

NumberRow.propTypes = {
  renderContent: PropTypes.func.isRequired
}

export default NumberRow;

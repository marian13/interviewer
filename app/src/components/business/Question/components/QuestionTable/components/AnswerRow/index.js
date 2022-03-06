import PropTypes from 'prop-types';

const AnswerRow = ({ renderContent }) => (
  <tr>
    <td>
      Answer
    </td>

    <td>
      {renderContent()}
    </td>
  </tr>
);

AnswerRow.propTypes = {
  renderContent: PropTypes.func.isRequired
}

export default AnswerRow;

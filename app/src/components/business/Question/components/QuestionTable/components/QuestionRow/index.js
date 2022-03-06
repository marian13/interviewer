import PropTypes from 'prop-types';

const QuestionRow = ({ renderContent }) => (
  <tr>
    <td>
      Question
    </td>

    <td>
      {renderContent()}
    </td>
  </tr>
);

QuestionRow.propTypes = {
  renderContent: PropTypes.func.isRequired
}

export default QuestionRow

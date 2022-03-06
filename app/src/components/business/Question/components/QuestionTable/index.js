import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

import NumberRow from './components/NumberRow';
import QuestionRow from './components/QuestionRow';
import AnswerRow from './components/AnswerRow';

const QuestionTable = ({
  renderNumberContent,
  renderQuestionContent,
  renderAnswerContent
}) => (
  <Table striped bordered hover>
    <tbody>
      {renderNumberContent && <NumberRow renderContent={renderNumberContent} />}
      {renderQuestionContent && <QuestionRow renderContent={renderQuestionContent} />}
      {renderAnswerContent && <AnswerRow renderContent={renderAnswerContent} />}
    </tbody>
  </Table>
);

QuestionTable.propTypes = {
  renderNumberContent: PropTypes.func,
  renderQuestionContent: PropTypes.func,
  renderAnswerContent: PropTypes.func,
}

QuestionTable.defaultProps = {
  renderNumberContent: null,
  renderQuestionContent: null,
  renderAnswerContent: null
}

export default QuestionTable;

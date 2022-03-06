import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

import NumberRow from './components/NumberRow';
import QuestionRow from './components/QuestionRow';
import AnswerRow from './components/AnswerRow';
import KeywordsRow from './components/KeywordsRow';

const QuestionTable = ({
  renderNumberContent,
  renderQuestionContent,
  renderAnswerContent,
  keywords
}) => (
  <Table striped bordered hover>
    <tbody>
      {renderNumberContent && <NumberRow renderContent={renderNumberContent} />}
      {renderQuestionContent && <QuestionRow renderContent={renderQuestionContent} />}
      {renderAnswerContent && <AnswerRow renderContent={renderAnswerContent} />}
      {keywords && <KeywordsRow keywords={keywords} />}
    </tbody>
  </Table>
);

QuestionTable.propTypes = {
  renderNumberContent: PropTypes.func,
  renderQuestionContent: PropTypes.func,
  renderAnswerContent: PropTypes.func,
  keywords: PropTypes.array
}

QuestionTable.defaultProps = {
  renderNumberContent: null,
  renderQuestionContent: null,
  renderAnswerContent: null,
  keywords: null
}

export default QuestionTable;

import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

import NumberRow from './components/NumberRow';
import QuestionRow from './components/QuestionRow';
import AnswerRow from './components/AnswerRow';
import KeywordsRow from './components/KeywordsRow';
import TopicsRow from './components/TopicsRow';

const QuestionTable = ({
  renderNumberContent,
  renderQuestionContent,
  renderAnswerContent,
  keywords,
  topics
}) => (
  <Table striped bordered hover>
    <tbody>
      {renderNumberContent && <NumberRow renderContent={renderNumberContent} />}
      {renderQuestionContent && <QuestionRow renderContent={renderQuestionContent} />}
      {renderAnswerContent && <AnswerRow renderContent={renderAnswerContent} />}
      {keywords && <KeywordsRow keywords={keywords} />}
      {topics && <TopicsRow topics={topics} />}
    </tbody>
  </Table>
);

QuestionTable.propTypes = {
  renderNumberContent: PropTypes.func,
  renderQuestionContent: PropTypes.func,
  renderAnswerContent: PropTypes.func,
  keywords: PropTypes.array,
  topics: PropTypes.array
}

QuestionTable.defaultProps = {
  renderNumberContent: null,
  renderQuestionContent: null,
  renderAnswerContent: null,
  keywords: null,
  topics: null
}

export default QuestionTable;

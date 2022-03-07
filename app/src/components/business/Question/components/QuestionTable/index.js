import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

import NumberRow from './components/NumberRow';
import QuestionRow from './components/QuestionRow';
import AnswerRow from './components/AnswerRow';
import KeywordsRow from './components/KeywordsRow';
import TopicsRow from './components/TopicsRow';
import SourcesRow from './components/SourcesRow';

const QuestionTable = ({
  keywords,
  sources,
  topics,
  renderNumberContent,
  renderQuestionContent,
  renderAnswerContent,
  renderSourcesContent
}) => (
  <Table striped bordered hover>
    <tbody>
      {renderNumberContent && <NumberRow renderContent={renderNumberContent} />}
      {renderQuestionContent && <QuestionRow renderContent={renderQuestionContent} />}
      {renderAnswerContent && <AnswerRow renderContent={renderAnswerContent} />}
      {keywords && <KeywordsRow keywords={keywords} />}
      {topics && <TopicsRow topics={topics} />}
      {(sources || renderSourcesContent) && <SourcesRow sources={sources} renderSourcesContent={renderSourcesContent} />}
    </tbody>
  </Table>
);

QuestionTable.propTypes = {
  keywords: PropTypes.array,
  sources: PropTypes.array,
  topics: PropTypes.array,
  renderAnswerContent: PropTypes.func,
  renderQuestionContent: PropTypes.func,
  renderNumberContent: PropTypes.func,
}

QuestionTable.defaultProps = {
  keywords: null,
  sources: null,
  topics: null,
  renderAnswerContent: null,
  renderQuestionContent: null,
  renderNumberContent: null,
  renderSourcesContent: null
}

export default QuestionTable;

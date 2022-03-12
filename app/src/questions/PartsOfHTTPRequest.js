import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const PartsOfHTTPRequest = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What are the parts of an HTTP request?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 80 }, PartsOfHTTPRequest);

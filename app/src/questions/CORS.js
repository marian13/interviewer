import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const CORS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is CORS?

        How does a client know, that request is forbidden by the server?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 82 }, CORS);

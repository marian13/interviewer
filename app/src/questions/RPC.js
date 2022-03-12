import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const RPC = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is RPC?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 85 }, RPC);

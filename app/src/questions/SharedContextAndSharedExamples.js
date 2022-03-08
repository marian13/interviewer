import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const SharedContextAndSharedExamples = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between <code>shared_context</code> and <code>shared_examples</code> in RSpec?
      </>
    )}

    topics={['RSpec']}
  />
);

export default withQuestionProps({ number: 51 }, SharedContextAndSharedExamples);

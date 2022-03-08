import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const LetInRSpec = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between <code>let</code> and <code>let!</code>?
      </>
    )}

    topics={['RSpec']}
  />
);

export default withQuestionProps({ number: 48 }, LetInRSpec);

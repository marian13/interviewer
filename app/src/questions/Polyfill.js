import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Polyfill = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is polyfill?
      </>
    )}

    topics={['JavaScript', 'Development']}
  />
);

export default withQuestionProps({ number: 69 }, Polyfill);

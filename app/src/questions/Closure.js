import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Closure = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is a closure?
      </>
    )}

    topics={['JavaScript', 'Development']}
  />
);

export default withQuestionProps({ number:67  }, Closure);

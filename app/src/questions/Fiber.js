import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Fiber = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between Fiber and Thread?
      </>
    )}

    topics={['Multithreading']}
  />
);

export default withQuestionProps({ number: 74 }, Fiber);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const EventLoop = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is event-loop?
      </>
    )}

    topics={['JavaScript', 'Development']}
  />
);

export default withQuestionProps({ number: 68 }, EventLoop);

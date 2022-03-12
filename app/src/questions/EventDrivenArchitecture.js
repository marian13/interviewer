import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const EventDrivenArchitecture = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How you can describe the Event-Driven Architecture?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 101 }, EventDrivenArchitecture);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const SQLInjection = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is SQL Injection?
      </>
    )}

    topics={['Security']}
  />
);

export default withQuestionProps({ number: 89 }, SQLInjection);

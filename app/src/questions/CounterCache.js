import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const CounterCache = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Counter Cache. What problem does it solve?
      </>
    )}

    topics={['Rails', 'Backend Development']}
  />
);

export default withQuestionProps({ number: 29 }, CounterCache);

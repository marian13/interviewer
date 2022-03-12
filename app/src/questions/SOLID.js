import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const SOLID = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is SOLID abbreviation?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 93 }, SOLID);

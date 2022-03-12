import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const BigONotation = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the meaning of Big O notation?
      </>
    )}

    topics={['Algorithms']}
  />
);

export default withQuestionProps({ number: 103 }, BigONotation);

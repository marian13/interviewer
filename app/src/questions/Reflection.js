import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Reflection = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Reflection
      </>
    )}
  />
);

export default withQuestionProps({ number: 21 }, Reflection);

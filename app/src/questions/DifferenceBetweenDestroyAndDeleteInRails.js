
import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DifferenceBetweenDestroyAndDeleteInRails = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between the <code>destroy</code> and <code>delete</code> methods in Rails?
      </>
    )}
  />
);

export default withQuestionProps({ number: 24 }, DifferenceBetweenDestroyAndDeleteInRails);

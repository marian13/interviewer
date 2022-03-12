import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const REST = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is REST?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 84 }, REST);

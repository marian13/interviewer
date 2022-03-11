import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const GIL = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is GIL?
      </>
    )}

    topics={['Multithreading']}
  />
);

export default withQuestionProps({ number: 71 }, GIL);

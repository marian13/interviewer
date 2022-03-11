import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const GreenThread = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What does a green thread mean?
      </>
    )}

    topics={['Multithreading']}
  />
);

export default withQuestionProps({ number: 72 }, GreenThread);


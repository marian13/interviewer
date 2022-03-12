import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DNS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is DNS? What is its purpose?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 78 }, DNS);

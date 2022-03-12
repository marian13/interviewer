import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Authentication = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What types of authentication do you know?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 76 }, Authentication);

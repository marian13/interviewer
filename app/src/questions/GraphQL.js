import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const GraphQL = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is GraphQL?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 86 }, GraphQL);

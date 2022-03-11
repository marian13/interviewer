import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Savepoint = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Savepoint?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 62 }, Savepoint);

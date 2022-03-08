import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Overindexing = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Why too much database indexing is bad?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 56 }, Overindexing);

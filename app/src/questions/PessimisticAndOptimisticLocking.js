import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const PessimisticAndOptimisticLocking = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Pessimistic and optimistic locking?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 59 }, PessimisticAndOptimisticLocking);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const ConcurrencyAndParallelism = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Difference between concurrency and parallelism?
      </>
    )}

    topics={['Multithreading']}
  />
);

export default withQuestionProps({ number: 70 }, ConcurrencyAndParallelism);

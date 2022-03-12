import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const CompositionAndAggregation = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How is composition different from aggregation?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 96 }, CompositionAndAggregation);

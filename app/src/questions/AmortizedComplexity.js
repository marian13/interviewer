import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const AmortizedComplexity = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Assume we have a dynamic array.

        <NewLine count={2} />

        Why do we say that <code>push</code> command has <code>O(1)</code> complexity, although it makes more than one operation under the hood?
      </>
    )}

    topics={['Algorithms']}
  />
);

export default withQuestionProps({ number: 106 }, AmortizedComplexity);

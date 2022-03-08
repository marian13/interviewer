import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const OperatorPriorityInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>&&</code>, <code>and</code> operators.

        <NewLine count={2} />

        When to prefer one over another?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 14 }, OperatorPriorityInRuby);

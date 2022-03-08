import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const DetermineObjectClassInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>is_a?</code>, <code>kind_of?</code> and <code>instance_of?</code>.

        <NewLine count={2} />

        What is the purpose?

        <NewLine count={2} />

        What are the differences?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 13 }, DetermineObjectClassInRuby);

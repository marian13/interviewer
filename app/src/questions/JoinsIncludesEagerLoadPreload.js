import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';
import Space from '../components/generic/Space';

const JoinsIncludesEagerLoadPreload = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Different methods to avoid N + 1 problem.

        <NewLine />

        Which one to use?

        <NewLine count={2} />

        <code>joins</code>, <Space />
        <code>includes</code>, <Space />
        <code>eager_load</code>, and <Space />
        <code>preload</code>?
      </>
    )}

    topics={['Rails']}
  />
);

export default withQuestionProps({ number: 28 }, JoinsIncludesEagerLoadPreload);

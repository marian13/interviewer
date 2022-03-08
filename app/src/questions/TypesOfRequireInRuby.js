import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Space from '../components/generic/Space';
import NewLine from '../components/generic/NewLine';

const TypesOfRequireInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>require</code>, <Space />
        <code>require_relative</code>, <Space />
        <code>load</code>, and <Space />
        <code>autoload</code>?

        <NewLine count={2} />

        How <code>load</code> and <code>autoload</code> work?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 18 }, TypesOfRequireInRuby);

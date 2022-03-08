import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const HasAndBelongsToManyInRails = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>has_many :through</code> and <code>has_and_belongs_to_many</code>.

        <NewLine count={2} />

        Differences?

        <NewLine count={2} />

        When do we need an intermediate model?

        <NewLine count={2} />

        When do we need an intermediate table?
      </>
    )}

    topics={['Rails', 'Databases']}
  />
);

export default withQuestionProps({ number: 32 }, HasAndBelongsToManyInRails);

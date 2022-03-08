import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const AfterSafeAndAfterCommit = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>after_save</code> and <code>after_commit</code>?

        <NewLine count={2} />

        How they are different?
      </>
    )}

    topics={['Rails', 'Databases']}
  />
);

export default withQuestionProps({ number: 33 }, AfterSafeAndAfterCommit);

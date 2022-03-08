import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const CloningObjectsInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>dup</code> and <code>clone</code> methods.

        <NewLine count={2} />

        How different they are?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 15 }, CloningObjectsInRuby);

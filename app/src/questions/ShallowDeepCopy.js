import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const ShallowDeepCopy = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is a shallow copy?

        <NewLine count={2} />

        How it is different from deep copy?
      </>
    )}

    topics={['JavaScript', 'Development']}
  />
);

export default withQuestionProps({ number: 64 }, ShallowDeepCopy);

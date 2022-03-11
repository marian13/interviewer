import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const JWT = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is JWT?

        <NewLine count={2} />

        When to use it?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 75 }, JWT);

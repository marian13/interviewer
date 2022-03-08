import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const MockStub = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is a <code>mock</code>?

        <NewLine count={2} />

        How it is different from a <code>stub</code>?
      </>
    )}

    topics={['RSpec', 'Unit Tests']}
  />
);

export default withQuestionProps({ number: 50 }, MockStub);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const REPL = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is irb?

        <NewLine count={2} />

        What is pry?

        <NewLine count={2} />

        What is a REPL?
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 45 }, REPL);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const GemNotation = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Could you explain the following notation?

        <NewLine count={2} />

        <Code
          language="ruby"
          lines={[
            'gem "rails", "~> 6.0"'
          ]}
        />

        What does it mean in Gemfile?
      </>
    )}

    renderAnswerContent={() => (
      <>
        Not greater than 6.1.
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 47 }, GemNotation);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';
import Code from '../components/generic/Code';

const ExpectAllowInRSpec = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between <code>expect</code> and <code>allow</code> in RSpec?

        <NewLine count={2} />

        For example:

        <Code
          language="ruby"
          lines={[
            'allow(User).to receive(:create)',
            'expect(User).to receive(:create)'
          ]}
        />

        What will be the return value of <code>User.create(params)</code> for each case?
      </>
    )}

    topics={['RSpec']}
  />
);

export default withQuestionProps({ number: 49 }, ExpectAllowInRSpec);


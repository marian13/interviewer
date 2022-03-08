import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

import Code from '../components/generic/Code';

const AcceptNestedAttributes = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Let's imagine you have a form on frontend.

        <NewLine count={2} />

        This form has inputs for <code>User</code> model and its association <code>Profile</code>.

        <NewLine count={2} />

        For example: <code>User</code> has one <code>Profile</code>.

        <NewLine count={2} />

        How to update attributes for both models at the same time using the following code?

        <NewLine count={2} />

        <Code
          language="ruby"
          lines={[
            'user.save(params)'
          ]}
        />
      </>
    )}

    renderAnswerContent={() => (
      <>
        accepts_nested_attributes_for
      </>
    )}

    topics={['Rails']}
  />
);

export default withQuestionProps({ number: 30 }, AcceptNestedAttributes);

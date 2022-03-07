import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const FindObjectsInRubyExpression = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Please, check the following Ruby expression:

        <Code
          language="ruby"
          lines={[
            'person.age = 6 / 4',
          ]}
        />

        Where you can see objects in it?

        <NewLine count={2} />

        Where is the equation operator (<code>=</code>) defined?

        <NewLine count={2} />

        Where is the division operator (<code>/</code>) defined?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 3 }, FindObjectsInRubyExpression);

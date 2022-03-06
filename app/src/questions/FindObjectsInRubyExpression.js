import Question from '../components/business/Question';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const FindObjectsInRubyExpression = () => (
  <Question
    renderNumberContent={() => 3}

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
  />
);

export default FindObjectsInRubyExpression;

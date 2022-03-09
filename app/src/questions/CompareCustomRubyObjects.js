import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const CompareCustomRubyObjects = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Let's imagine you have your own custom Ruby class. You can modify it in any way you like.

        <NewLine count={2} />

        How to compare instances of it as in the example:

        <Code
          language="ruby"
          lines={[
            'a < b',
            'a >= b'
          ]}
        />
      </>
    )}

    sources={[
      {
        path: "https://ruby-doc.org/core-3.0.0/Comparable.html",
        text: "Comparable mixin."
      },
      {
        path: "https://dev.to/jblengino510/the-spaceship-operator-in-ruby-2fmk",
        text: "Spaceship operator."
      }
    ]}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 5 }, CompareCustomRubyObjects);

import Question from '../components/business/Question';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const RubyBlockShorthand = () => (
  <Question
    renderNumberContent={() => 3}

    renderQuestionContent={() => (
      <>
        Ruby block shorthand.

        <NewLine count={2} />

        Could you explain how does the following code work? Especially the ampersand sign?

        <Code
          language="ruby"
          lines={[
            '[1, 2, 3].map(&:to_s)'
          ]}
        />
      </>
    )}
  />
);

export default RubyBlockShorthand;

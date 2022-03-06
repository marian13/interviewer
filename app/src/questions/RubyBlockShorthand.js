import Question from '../components/business/Question';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';
import Link from '../components/generic/Link';

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

    renderSourcesContent={() => (
      <>
        <ul>
          <li>
            <Link path="https://medium.com/whynotio/shorthand-syntax-for-each-map-reduce-more-a790ba12edc9" text="Shorthand syntax for each, map, reduce & more." />
          </li>

          <li>
            <Link path="https://stackoverflow.com/questions/8793616/other-ruby-map-shorthand-notation" text="Other Ruby Map Shorthand Notation." />
          </li>
        </ul>
      </>
    )}
  />
);

export default RubyBlockShorthand;

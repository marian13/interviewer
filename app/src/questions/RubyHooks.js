import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';

const RubyHooks = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Do you know something about Ruby Hooks?
      </>
    )}

    renderAnswerContent={() => (
      <>
        <Code
          language="ruby"
          lines={[
            'self.included',
            'self.extended',
            'self.prepended',
            'self.inherited',
            'self.method_added',
            'self.method_removed',
            'self.method_undefined',
            'method_missing'
          ]}
        />
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 19 }, RubyHooks);

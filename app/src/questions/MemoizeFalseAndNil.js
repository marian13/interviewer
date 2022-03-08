import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const MemoizeFalseAndNil = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How to memoize <code>false</code> and <code>nil</code> values in Ruby?
      </>
    )}

    renderAnswerContent={() => (
      <>
        Check Ruby's <code>defined?</code> operator.

        <NewLine count={2} />

        <Code
          language="ruby"
          lines={[
            'def data',
            '  return @data unless defined? @data',
            '',
            '  @data = fetch_data',
            'end'
          ]}
        />
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 12 }, MemoizeFalseAndNil);

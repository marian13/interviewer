import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';
import Space from '../components/generic/Space';

const ClassVariablesInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Please, explain what is the meaning of <Space />
        <code style={{ whiteSpace: 'nowrap' }}>instance variables</code>, <Space />
        <code style={{ whiteSpace: 'nowrap' }}>class instance variables</code>, and <Space />
        <code style={{ whiteSpace: 'nowrap' }}>class variables</code> <Space />
        in Ruby?

        <NewLine count={2} />

        Consider the following example:

        <Code
          language="ruby"
          lines={[
            'class Person',
            '  @@count',
            '',
            '  @limit',
            '',
            '  def age',
            '    @age',
            '  end',
            'end'
          ]}
        />

        What kind of variable is <code>{'@@count'}</code>?

        <NewLine count={2} />

        How to decide which one to use? <Space />

        <code>{'@@count'}</code> or <code>{'@limit'}</code>?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 16 }, ClassVariablesInRuby);

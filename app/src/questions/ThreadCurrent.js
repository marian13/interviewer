import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const ThreadCurrent = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How does the following code work?

        <NewLine count={2} />

        <Code
          language="ruby"
          lines={[
            'I18n.t(:hello) # => "hello"',
            'I18n.t(:world) # => "world"',
            '',
            'I18n.with_locale(:fr) do',
            '  I18n.t(:hello) # => "salut"',
            '  I18n.t(:world) # => "monde"',
            'end',
            '',
            'I18n.t(:hello) # => "hello"',
            'I18n.t(:world) # => "world"'
          ]}
        />

        How does <code>t</code> method know current locale value?

        <NewLine count={2} />

        Please, try to implement <code>with_locale</code> method by yourself?
      </>
    )}

    topics={['Rails', 'Multithreading']}
  />
);

export default withQuestionProps({ number: 34 }, ThreadCurrent);

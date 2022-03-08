import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const MemoizationInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is memoization?

        <NewLine count={2} />

        How does or-equals operator(<code>||=</code>) work?

        <NewLine count={2} />

        Please, name cases when or-equals operator(<code>||=</code>) does not memoize its value?

        <NewLine count={2} />

        For example:

        <Code language="ruby" lines={[
          'def data',
          '  @data ||= make_very_resource_heavy_http_request_to_fetch_data',
          'end',
          '',
          'data # Calculates data for the first time.',
          '',
          'data # Calculates data again. Why?',
        ]}/>
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 11 }, MemoizationInRuby);

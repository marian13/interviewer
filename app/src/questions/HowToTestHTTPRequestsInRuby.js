import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Link from '../components/generic/Link';
import NewLine from '../components/generic/NewLine';
import Space from '../components/generic/Space';

const HowToTestHTTPRequestsInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Let's imagine you have a class that makes HTTP request to YouTube API?

        <NewLine count={2} />

        How to test such a class?
      </>
    )}

    renderAnswerContent={() => (
      <>
        <Link path="https://github.com/vcr/vcr" text="VCR Cassettes." />

        <NewLine count={2} />

        <Link path="https://github.com/bblimke/webmock" text="WebMock." />

        <NewLine count={2} />

        Ordinary RSpec stub like <Space />

        <Link path="https://relishapp.com/rspec/rspec-mocks/docs/basics/allowing-messages" text="allow" />.
      </>
    )}

    topics={['RSpec', 'Unit Tests']}
  />
);

export default withQuestionProps({ number: 53 }, HowToTestHTTPRequestsInRuby);


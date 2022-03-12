import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const OtherProtocols = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What types of protocol do you know, except HTTP?

        <NewLine count={2} />

        FTP?

        <NewLine count={2} />

        WS?

        <NewLine count={2} />

        SSH?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 81 }, OtherProtocols);

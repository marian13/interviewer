import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const PatchPut = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        HTTP Patch and Put?

        <NewLine count={2} />

        What is the difference?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 83 }, PatchPut);

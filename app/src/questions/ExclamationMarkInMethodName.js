import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine'

const ExclamationMarkInMethodName = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the meaning of exclamation mark (<code>!</code>) in method name in Ruby?

        <NewLine count={2} />

        What is the meaning of exclamation mark (<code>!</code>) in method name in Rails?
      </>
    )}

    topics={['Ruby Core', 'Rails']}
  />
);

export default withQuestionProps({ number: 10 }, ExclamationMarkInMethodName);

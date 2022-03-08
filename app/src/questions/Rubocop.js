import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const Rubocop = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Rubocop?

        <NewLine count={2} />

        What is a linter?
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 44 }, Rubocop);

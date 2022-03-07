import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const ProtectedInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How does <code>protected</code> work in Ruby?

        <NewLine count={2} />

        How different it is from <code>private</code>?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 2 }, ProtectedInRuby);

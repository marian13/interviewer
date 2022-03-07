import Question from '../components/business/Question';

import NewLine from '../components/generic/NewLine';

const ProtectedInRuby = () => (
  <Question
    renderNumberContent={() => 2}

    renderQuestionContent={() => (
      <>
        How does <code>protected</code> work in Ruby?

        <NewLine count={2} />

        How different it is from <code>private</code>?
      </>
    )}
  />
);

export default ProtectedInRuby;

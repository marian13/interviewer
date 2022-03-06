import Question from '../components/business/Question';

const RemoveEvenIntegersFromArrayInRuby = () => (
  <Question
    renderNumberContent={() => 2}

    renderQuestionContent={() => (
      <>
        How does <code>protected</code> work in Ruby? How different it is from <code>private</code>?
      </>
    )}
  />
);

export default RemoveEvenIntegersFromArrayInRuby;

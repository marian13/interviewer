import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const WhatIsThePurposeOfFactories = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the purpose of factories in specs for Rails apps?
      </>
    )}

    topics={['RSpec', 'Rails', 'Unit tests']}
  />
);

export default withQuestionProps({ number: 52 }, WhatIsThePurposeOfFactories);

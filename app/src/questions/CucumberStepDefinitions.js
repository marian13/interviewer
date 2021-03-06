import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const CucumberStepDefinitions = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How does Cucumber look for step definitions?
      </>
    )}

    topics={[
      'Cucumber',
      'Automated Tests'
    ]}
  />
);

export default withQuestionProps({ number: 54 }, CucumberStepDefinitions);

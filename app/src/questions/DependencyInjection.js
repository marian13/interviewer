import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const DependencyInjection = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Dependency Injection?

        <NewLine count={2} />

        What problem does it solve?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 95 }, DependencyInjection);

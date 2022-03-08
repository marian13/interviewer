import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const ModuleFunction = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is <code>module_function</code>?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 9 }, ModuleFunction);

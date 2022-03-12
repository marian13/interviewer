import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DuckTyping = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Duck typing?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 97 }, DuckTyping);

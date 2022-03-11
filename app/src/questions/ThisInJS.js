import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const ThisInJS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How does <code>this</code> keyword work in JavaScript?
      </>
    )}

    topics={['JavaScript']}
  />
);

export default withQuestionProps({ number: 65 }, ThisInJS);

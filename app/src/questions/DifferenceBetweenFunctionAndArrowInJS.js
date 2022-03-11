import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DifferenceBetweenFunctionAndArrowInJS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How is the usual <code>function</code> different from the <code>arrow</code> function in JavaScript?
      </>
    )}

    topics={['JavaScript']}
  />
);

export default withQuestionProps({ number: 66 }, DifferenceBetweenFunctionAndArrowInJS);

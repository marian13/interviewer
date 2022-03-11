import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const LetConstInJS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Why <code>let</code> and <code>const</code> were introduced in ECMAScript 6?
      </>
    )}

    topics={['JavaScript']}
  />
);

export default withQuestionProps({ number: 63 }, LetConstInJS);


import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const NPlusOneExample = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Could you provide a real-word N + 1 problem example?
      </>
    )}

    topics={['Rails', 'Backend Development']}
  />
);

export default withQuestionProps({ number: 27 }, NPlusOneExample);

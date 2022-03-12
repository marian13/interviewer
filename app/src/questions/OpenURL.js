import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const OpenURL = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Open URL?
      </>
    )}

    topics={['Security']}
  />
);

export default withQuestionProps({ number: 92 }, OpenURL);

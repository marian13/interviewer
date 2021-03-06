import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Refinement = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Refinement
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 22 }, Refinement);

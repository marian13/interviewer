import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const FatModelFatController = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Fat Model and Fat Controller problem? How to avoid it?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 100 }, FatModelFatController);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const TypesOfGOFPatterns = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Please, name types of GOF patterns?
      </>
    )}
  />
);

export default withQuestionProps({ number: 98 }, TypesOfGOFPatterns);

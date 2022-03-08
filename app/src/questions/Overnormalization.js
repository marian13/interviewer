import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Overnormalization = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Why database over-normalization is bad?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 55 }, Overnormalization);

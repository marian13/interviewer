import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Arel = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Arel?
      </>
    )}

    topics={['Rails', 'Databases']}
  />
);

export default withQuestionProps({ number: 37 }, Arel);

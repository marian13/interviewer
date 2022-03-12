import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const TypesOfTrees = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Types of trees?
      </>
    )}

    topics={['Algorithms']}
  />
);

export default withQuestionProps({ number: 105 }, TypesOfTrees);

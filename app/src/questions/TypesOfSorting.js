import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const TypesOfSorting = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Types of sorting? What is the benefit of one sorting algorithm over another?
      </>
    )}

    topics={['Algorithms']}
  />
);

export default withQuestionProps({ number: 104 }, TypesOfSorting);

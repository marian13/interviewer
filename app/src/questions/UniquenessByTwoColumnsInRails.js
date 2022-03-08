import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const UniquenessByTwoColumnsInRails = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How to implement uniqueness by two columns in Rails?
      </>
    )}

    topics={['Rails', 'Databases']}
  />
);

export default withQuestionProps({ number: 31 }, UniquenessByTwoColumnsInRails);

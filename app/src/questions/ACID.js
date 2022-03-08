import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const ACID = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is ACID abbreviation?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 58 }, ACID);

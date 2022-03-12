import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const AdapterInRails = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Adapter usage example in Rails?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 99 }, AdapterInRails);

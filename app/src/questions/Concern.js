import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Concern = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is a <code>Concern</code> in Rails?
      </>
    )}

    topics={['Rails']}
  />
);

export default withQuestionProps({ number: 26 }, Concern);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const RailsEngine = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Rails Engine?
      </>
    )}

    topics={['Rails']}
  />
);

export default withQuestionProps({ number: 35 }, RailsEngine);

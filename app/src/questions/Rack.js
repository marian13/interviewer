import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Rack = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Rack?
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 38 }, Rack);

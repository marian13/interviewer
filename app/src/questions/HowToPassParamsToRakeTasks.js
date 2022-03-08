
import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const HowToPassParamsToRakeTasks = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How to pass params to a rake task?
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 40 }, HowToPassParamsToRakeTasks);

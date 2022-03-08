
import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Capistrano = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Сapistrano?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 39 }, Capistrano);

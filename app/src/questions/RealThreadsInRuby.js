import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const RealThreadsInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        How to make Ruby threads parallel?
      </>
    )}

    topics={['Multithreading']}
  />
);

export default withQuestionProps({ number: 73 }, RealThreadsInRuby);

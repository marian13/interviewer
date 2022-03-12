import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DDOS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is DDoS?
      </>
    )}

    topics={['Security']}
  />
);

export default withQuestionProps({ number: 87 }, DDOS);

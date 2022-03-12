import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DifferenceBetweenHTTPAndHTTPS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between HTTP and HTTPS?
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 79 }, DifferenceBetweenHTTPAndHTTPS);

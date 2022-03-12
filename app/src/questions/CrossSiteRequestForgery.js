import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const CrossSiteRequestForgery = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Cross Site Request Forgery?
      </>
    )}

    topics={['Security']}
  />
);

export default withQuestionProps({ number: 90 }, CrossSiteRequestForgery);

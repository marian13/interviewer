import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const CrossSiteScripting = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Cross Site Scripting?
      </>
    )}

    topics={['Security']}
  />
);

export default withQuestionProps({ number: 88 }, CrossSiteScripting);

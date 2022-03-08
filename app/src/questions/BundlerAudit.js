
import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const BundlerAudit = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the purpose of <code>bundler-audit</code>?
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 46 }, BundlerAudit);

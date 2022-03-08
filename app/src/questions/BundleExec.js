import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Space from '../components/generic/Space';

const BundleExec = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the purpose of <code>bundle exec</code> <Space />
        in front of ruby commands like <code>rails</code> and <code>rake</code>?
      </>
    )}

    topics={['Ruby Tools']}
  />
);

export default withQuestionProps({ number: 41 }, BundleExec);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const GitMergeSquashRebase = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        <code>git merge</code>, <code>git squash</code>, and <code>git rebase</code>. Difference?
      </>
    )}

    topics={['git']}
  />
);

export default withQuestionProps({ number: 102 }, GitMergeSquashRebase);

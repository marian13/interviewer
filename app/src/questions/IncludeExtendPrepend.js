import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const IncludeExtendPrepend = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Could you explain the purpose of <code>include, extend, prepend</code> in Ruby?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 8 }, IncludeExtendPrepend);

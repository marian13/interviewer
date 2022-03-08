import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const DifferenceBetweenProcAndLambda = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between <code>proc</code> and <code>lambda</code> in Ruby?
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 17 }, DifferenceBetweenProcAndLambda);

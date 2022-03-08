import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const BlankMethodInRails = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Could you name cases when <code>blank?</code> method return true in Rails?
      </>
    )}
  />
);

export default withQuestionProps({ number: 23 }, BlankMethodInRails);


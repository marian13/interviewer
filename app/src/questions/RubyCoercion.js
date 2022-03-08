import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const RubyCoercion = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Ruby Coercion
      </>
    )}
  />
);

export default withQuestionProps({ number: 20 }, RubyCoercion);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const MassAttributeAssignment = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Mass Attribute Assignement?
      </>
    )}

    topics={['Security']}
  />
);

export default withQuestionProps({ number: 91 }, MassAttributeAssignment);

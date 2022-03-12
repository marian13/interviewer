import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const FunctionalAndNonfunctionalRequirements = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Functional and non-functional requirements? Difference?
      </>
    )}

    topics={['Management']}
  />
);

export default withQuestionProps({ number: 107 }, FunctionalAndNonfunctionalRequirements);

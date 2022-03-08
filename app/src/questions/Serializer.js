import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const Serializer = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is <code>Serializer</code>?
      </>
    )}

    topics={['Rails', 'Backend Development']}
  />
);

export default withQuestionProps({ number: 25 }, Serializer);

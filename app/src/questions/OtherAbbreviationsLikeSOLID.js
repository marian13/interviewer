import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

const OtherAbbreviationsLikeSOLID = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Do you know any other abbreviations like SOLID?
      </>
    )}

    topics={['Patterns']}
  />
);

export default withQuestionProps({ number: 94 }, OtherAbbreviationsLikeSOLID);

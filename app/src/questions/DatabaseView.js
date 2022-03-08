import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const DatabaseView = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is a database view?

        <NewLine count={2} />

        What is a materialized view?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 57 }, DatabaseView);

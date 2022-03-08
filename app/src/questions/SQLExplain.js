import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const SQLExplain = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        SQL query optimization.

        <NewLine count={2} />

        What is the purpose of SQL Explain?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 60 }, SQLExplain);

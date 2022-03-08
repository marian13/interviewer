import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';

const SQLHaving = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Customers:

        <NewLine count={2} />

        <Code
          language="text"
          lines={[
            '| ID | NAME    | Country |',
            '|----|---------|---------|',
            '|  1 | David   | USA     |',
            '|  2 | Marcin  | Poland  |',
            '|  3 | Marian  | Ukraine |'
          ]}
        />

        Write a query that returns a list of countires with more than 5 customers?
      </>
    )}

    topics={['Databases']}
  />
);

export default withQuestionProps({ number: 61 }, SQLHaving);

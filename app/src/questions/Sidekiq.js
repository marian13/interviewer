
import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const Sidekiq = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is Sidekiq?

        <NewLine count={2} />

        What is a background job?
      </>
    )}

    topics={['Ruby Tools', 'Backend Development']}
  />
);

export default withQuestionProps({ number: 43 }, Sidekiq);

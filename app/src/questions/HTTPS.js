import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Link from '../components/generic/Link';

const HTTPS = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        Could you expain how HTTPS works as detailed as possible?
      </>
    )}

    renderAnswerContent={() => (
      <>
        <Link path="https://howhttps.works" text="HOW HTTPS WORKS" />
      </>
    )}

    topics={['Web']}
  />
);

export default withQuestionProps({ number: 77 }, HTTPS);

import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';

const STIAndPolymorphicAssociation = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is STI?

        <NewLine count={2} />

        How it is different from Polymorphic Association?

        <NewLine count={2} />

        Which additional db table columns we need for STI? <NewLine />
        For Polymorphic Association?
      </>
    )}

    topics={['Rails', 'Databases']}
  />
);

export default withQuestionProps({ number: 36 }, STIAndPolymorphicAssociation);

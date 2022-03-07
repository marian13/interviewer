import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import Code from '../components/generic/Code';

const WhatIsTheDifferenceBetweenComparisonMethodsInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the difference between comparison methods in Ruby?

        <Code
          language="ruby"
          lines={[
            '==, equal?, eql?, ==='
          ]}
        />
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 7 }, WhatIsTheDifferenceBetweenComparisonMethodsInRuby);

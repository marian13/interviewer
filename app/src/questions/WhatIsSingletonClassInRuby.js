import Question from '../components/business/Question';
import withQuestionProps from '../utils/business/withQuestionProps';

import NewLine from '../components/generic/NewLine';
import Link from '../components/generic/Link';

const WhatIsSingletonClassInRuby = ({ number }) => (
  <Question
    renderNumberContent={() => number}

    renderQuestionContent={() => (
      <>
        What is the singleton class in Ruby? It is also called the eigen class.

        <NewLine count={2} />

        This is not a question about the singleton pattern from Gang of Four patterns.
        It is about a concept in Ruby.

        <NewLine count={2} />

        So, what is the singleton class in Ruby?
        Who can have singleton classes?
        What is its purpose?
        Why does Python or JavaScript do not have it, but Ruby has?
      </>
    )}

    keywords={['classes', 'object', 'method lookup', 'metaclass', 'metaprogramming']}

    renderSourcesContent={() => (
      <>
        <ul>
          <li>
            <Link path="https://medium.com/@leo_hetsch/demystifying-singleton-classes-in-ruby-caf3fa4c9d91" text="Diving into Ruby Singleton Classes." />
          </li>
        </ul>
      </>
    )}

    topics={['Ruby Core']}
  />
);

export default withQuestionProps({ number: 6 }, WhatIsSingletonClassInRuby);

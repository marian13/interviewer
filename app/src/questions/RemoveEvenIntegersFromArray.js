import Question from '../components/business/Question';

import Code from '../components/generic/Code';
import NewLine from '../components/generic/NewLine';
import Link from '../components/generic/Link';

const RemoveEvenIntegersFromArray = () => (
  <Question
    renderNumberContent={() => 1}

    renderQuestionContent={() => (
      <>
        Given: An array of integers, e.g.
        <NewLine />
        <code>arr = [1, 2, 3, 4, 5]</code>
        <NewLine count={2} />
        Task: Remove even integers from it.
        <NewLine count={2} />
        Expected result:
        <NewLine />
        <code>[1, 3, 5]</code>
      </>
    )}

    renderAnswerContent={() => (
      <>
        <b>Best answer:</b>

        <NewLine />

        <Code
          language="ruby"
          lines={[
            'arr.select { |x| !x.even? } # or',
            'arr.select { |x| x.odd? }'
          ]}
        />

        <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-filter" text="filter" />
        {", or "}
        <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-delete_if" text="delete_if" />
        {", or "}
        <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-reject" text="reject" />
        .

        <NewLine count={2} />

        <b>Good answer:</b>

        <NewLine />

        <Code
          language="ruby"
          lines={[
            'arr.select { |x| x % 2 != 0 } # or',
            'arr.select { |x| x % 2 == 1 }',
          ]}
        />

        <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-filter" text="filter" />
        {", or "}
        <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-delete_if" text="delete_if" />
        {", or "}
        <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-reject" text="reject" />
        .

        <NewLine count={2} />

        <b>Beginner answer, but better that nothing:</b>

        <NewLine />

        <Code
          language="ruby"
          lines={[
            'res = []\n',
            'arr.each do |x|',
            '  if x % 2 == 1',
            '    res.push(x)',
            '  end',
            'end\n',
            'res'
          ]}
        />

        <b>Popular wrong answer:</b>

        <NewLine />

        Usage of <Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-map" text="map" /> in order to loop array.

        <NewLine count={2} />

        It is worth asking what the candidate will do with <code>nil</code> values afterward (<Link path="https://ruby-doc.org/core-3.0.0/Array.html#method-i-compact" text="compact" />).
      </>
    )}

    keywords={['select', 'filter', 'delete_if', 'reject', 'even', 'odd', 'modulo of 2']}
  />
);

export default RemoveEvenIntegersFromArray;

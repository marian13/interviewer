import { Fragment } from 'react';

import PropTypes from 'prop-types';

import Keyword from './components/Keyword';

const KeywordsRow = ({ keywords }) => (
  <tr>
    <td>
      Keywords
    </td>

    <td>
      {keywords.map(keyword => (
        <Fragment key={keyword}>
          <Keyword keyword={keyword} />
          {' '}
        </Fragment>
      ))}
    </td>
  </tr>
);

KeywordsRow.propTypes = {
  keywords: PropTypes.array.isRequired
}

export default KeywordsRow;

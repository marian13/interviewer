import { Fragment } from 'react';

import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/Badge';

const KeywordsRow = ({ keywords }) => (
  <tr>
    <td>
      Keywords
    </td>

    <td>
      {keywords.map(keyword => (
        <Fragment key={keyword}>
          <Badge pill bg="primary" text="light">
            {keyword}
          </Badge>
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

import { Fragment } from 'react';

import PropTypes from 'prop-types';

import Link from '../../../../../../generic/Link';

const TopicsRow = ({ topics }) => (
  <tr>
    <td>
      Topics
    </td>

    <td>
      {topics.map(topic => (
        <Fragment key={topic}>
          <Link path={`#${topic}`} text={topic} />
          {' '}
        </Fragment>
      ))}
    </td>
  </tr>
);

TopicsRow.propTypes = {
  topics: PropTypes.array.isRequired
}

export default TopicsRow;

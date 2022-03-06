import PropTypes from 'prop-types';

const SourcesRow = ({ renderContent }) => (
  <tr>
    <td>
      Sources
    </td>

    <td>
      {renderContent()}
    </td>
  </tr>
);

SourcesRow.propTypes = {
  renderContent: PropTypes.func.isRequired
}

export default SourcesRow;

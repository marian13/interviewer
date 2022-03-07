import PropTypes from 'prop-types';

import Link from '../../../../../../generic/Link';

/**
 * Only one of `renderSourcesContent' or `sources' props should be passed.
 * `renderSourcesContent' has priority over `sources'.
 */
const SourcesRow = ({ sources, renderSourcesContent }) => {
  const renderSources = () => (
    <ul>
      {sources.map(source => (
        <li key={source.path}>
          <Link path={source.path} text={source.text} />
        </li>
      ))}
    </ul>
  );

  const renderContent = () => {
    if (renderSourcesContent) return renderSourcesContent();
    if (sources) return renderSources();

    return null;
  }

  return (
    <tr>
      <td>
        Sources
      </td>

      <td>
        {renderContent()}
      </td>
    </tr>
  );
};

SourcesRow.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    text: PropTypes.string
  })),
  renderSourcesContent: PropTypes.func
}

SourcesRow.defaultProps = {
  sources: null,
  renderSourcesContent: null
}

export default SourcesRow;

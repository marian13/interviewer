import PropTypes from 'prop-types';

import Highlight from 'react-highlight';

const Code = ({ language, lines }) => (
  <Highlight className={`language-${language}`}>
    {lines.join('\n')}
  </Highlight>
);

Code.propTypes = {
  language: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string)
};

Code.defaultProps = {
  /*
   * See for all possible `language' values:
   * https://highlightjs.org/static/demo/
   */
  language: 'ruby',
  lines: []
};

export default Code;

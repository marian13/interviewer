/**
 * Returns Component name.
 *
 * - https://reactjs.org/docs/higher-order-components.html#convention-pass-unrelated-props-through-to-the-wrapped-component
 * - https://stackoverflow.com/questions/41581130/what-is-react-component-displayname-is-used-for
 * - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
 */
const getDisplayName = Component => Component.displayName || Component.name || 'Component';

export default getDisplayName;

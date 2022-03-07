/*
 * Automatically imports all files in the current folder, except `index.js'.
 * https://webpack.js.org/guides/dependency-management/#requirecontext
 *
 * Copied without any modification from:
 * https://stackoverflow.com/questions/55211360/webpack-importing-all-files-and-exporting-it-as-an-arrayhttps://stackoverflow.com/questions/55211360/webpack-importing-all-files-and-exporting-it-as-an-array
 */
const context = require.context('.', true, /^\.\/(?!index\.js).*\.js$/, 'sync');

let resolvers = [];

context.keys().forEach(module => {
  resolvers.push(context(module).default)
});

export default resolvers

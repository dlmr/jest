const resolve = require('resolve');
const browserResolve = require('browser-resolve');

type ResolverOptions = {|
  basedir: Path,
  browser?: boolean,
  extensions?: Array<string>,
  moduleDirectory?: Array<string>,
  paths?: ?Array<Path>,
|};

function defaultResolver(path: Path, options: ResolverOptions) {
  const resv = options.browser ? browserResolve : resolve;

  return resv.sync(
    path,
    {
      basedir: options.basedir,
      extensions: options.extensions,
      moduleDirectory: options.moduleDirectory,
      paths: options.paths,
    }
  );
}

module.exports = defaultResolver;

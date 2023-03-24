import pj from '../../package.json';
export const env: { [s: string]: (string | null); } = {
  'npm_package_version': pj.version
};

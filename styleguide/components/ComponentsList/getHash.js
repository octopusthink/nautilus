import escapeRegExp from 'lodash/escapeRegExp';

// We’re using this file to handle the hash to develop the routes, there are two types of hash '#/' and '#!/'
// However, it is a temporal solution because is necessary using a library third-party that it is his focus
// You can find more information here:
// https://github.com/styleguidist/react-styleguidist/pull/993
const defaultPrependHash = '#/';
const separator = '/';
const hashValRegexp = /(.*)\?/;

function trimHash(hash, prependHash) {
  if (!hash) {
    return '';
  }
  const regexp = new RegExp('^' + escapeRegExp(prependHash || defaultPrependHash), 'g');
  return hash.replace(regexp, '');
}

const trimParams = (hash) => {
  const result = hashValRegexp.exec(hash);
  return (result && result[1]) || hash;
};

/**
 * Get hash value without '#', prependHash and parameters
 *
 * @param {string} hash
 * @param {string} prependHash
 * @return {string}
 */
export const getHash = (hash, prependHash) => {
  return decodeURIComponent(trimParams(trimHash(hash, prependHash)));
};

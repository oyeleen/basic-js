const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsStats = {};
  for (let domain of domains) {
    domain.split('.').reduceRight((result, current) => {
      let subDomain = result + '.' + current;
      dnsStats[subDomain] = (dnsStats.hasOwnProperty(subDomain)) ? dnsStats[subDomain] + 1 : 1;
      return subDomain;
    }, '');
  }
  return dnsStats;
}

module.exports = {
  getDNSStats
};

const get = require('lodash.get')

module.exports = function (keys, object) {
  if (arguments.length > 1) return valuesOfKeys(keys, object)
  else return (object) => valuesOfKeys(keys, object)
}

function valuesOfKeys (keys, object) {
  return keys.map(key => {
    if (typeof key === 'function') return key(object)
    else return get(object, key)
  })
}
const { Client } = require('elasticsearch')

/**
 * Create Elasticsearch middleware
 *
 * @param {Object} opts - options for `elasticsearch.Client`
 * @param {String} opts.key [client] - key to bind client
 * @param {Array} opts.delegate [] - direct access to clients props
 *
 * @returns {Function} Koa middleware
 */

function elasticsearch (opts = {}) {
  const { key = 'client' } = opts

  const client = new Client(opts)

  const middleware = (ctx, next) => {
    ctx[key] = client
    return next()
  }

  // ref `client`
  middleware.client = client

  return middleware
}

module.exports = elasticsearch

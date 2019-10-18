/**
 *
 */
const { ActionTransport } = require('@microfleet/core')

async function handler(request) {
  this.log.info('echo route triggered')
  const { headers, method, route, transport } = request
  return { headers, method, route, transport }
}

handler.transports = [ActionTransport.http]

module.exports = handler

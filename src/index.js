const { Microfleet, ActionTransport } = require('@microfleet/core')
const config = require('config').util.toObject()

const {
  default: metricObservability
} = require('@microfleet/core/lib/plugins/router/extensions/audit/metrics')

class WorkshopService extends Microfleet {
  constructor() {
    // inject available transports
    config.router.routes.transports = [ActionTransport.http, ActionTransport.amqp]

    // required for prometheus plugin (to measure request-response time)
    config.router.extensions = {
      enabled: ['preRequest', 'postResponse'],
      register: [metricObservability()]
    }
    super(config)
  }
}

module.exports = WorkshopService

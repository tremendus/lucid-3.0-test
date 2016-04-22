'use strict'

const Bid = use('App/Model/Bid')

class ApiController {

  * bid_list (request, response) {
    const query = Bid
      .query()
      .where({ id: 1 })
      .with(['client'])
    const bid = yield query.fetch()
    return response.json(bid)
  }

}

module.exports = ApiController

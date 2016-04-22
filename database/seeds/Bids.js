'use strict'

const Bid = use('App/Model/Bid')

const Factory = use('Factory')

class BidsSeeder {

  * run () {
    // run model/database factories here
    yield Bid.create({
      apex_id:      '3086_Rancho Del Canon_Carlsbad_92009_C1001',
      client:       1
    })
    return
  }

}

module.exports = BidsSeeder

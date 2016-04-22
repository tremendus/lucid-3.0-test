'use strict'

const Client = use('App/Model/Client')

const Factory = use('Factory')

class ClientsSeeder {

  * run () {
    // run model/database factories here
    yield Client.create({
      apex_id:      1001,
      name:         'Tremendus Apps',
      abbreviation: 'TA'
    })
    return
  }

}

module.exports = ClientsSeeder

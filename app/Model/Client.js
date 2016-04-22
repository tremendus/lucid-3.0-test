'use strict'

const Lucid = use("Lucid")

class Client extends Lucid {

  static get softDeletes () {
    return false
  }

  // bids () {
  //   return this.hasMany('App/Model/Bid')
  // }

}

module.exports = Client

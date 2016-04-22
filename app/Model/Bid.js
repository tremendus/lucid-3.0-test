'use strict'

const Lucid = use("Lucid")

class Bid extends Lucid {

  static get softDeletes () {
    return false
  }

  client () {
    return this.belongsTo('App/Model/Client', 'client')
  }

  // property () {
  //   return this.belongsTo('App/Model/Property', 'property')
  // }
  //
  // underwriting () {
  //   return this.belongsTo('App/Model/Underwriting', 'underwriting')
  // }

  setMeta (value) {
    if (!value) {
      return value
    }
    return JSON.stringify(value)
  }

  getMeta (value) {
    if (!value) {
      return value
    }
    return JSON.parse(value)
  }

}

module.exports = Bid

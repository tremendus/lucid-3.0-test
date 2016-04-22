'use strict'

const Schema = use('Schema')

class CreateTableBidsSchema extends Schema {

  up () {
    this.create('bids', function (table) {
      table.increments('id')
      table.string('apex_id').index()
      table.integer('client').references('id').inTable('clients')
      // table.integer('property').references('id').inTable('properties')
      // table.integer('underwriting').references('id').inTable('underwritings')
      table.string('status')
      table.string('apex_bid')
      table.string('apex_arv')
      table.string('apex_rehab')
      table.string('client_indicative_bid')
      table.string('client_final_bid')
      table.string('client_arv')
      table.string('client_rehab')
      table.json('meta')
      table.timestamp('client_rejection')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.table('create_table_bids', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreateTableBidsSchema

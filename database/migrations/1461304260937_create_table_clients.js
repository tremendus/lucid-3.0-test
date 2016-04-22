'use strict'

const Schema = use('Schema')

class CreateTableClientsSchema extends Schema {

  up () {
    this.create('clients', function (table) {
      table.increments('id')
      table.integer('apex_id').index()
      table.string('name')
      table.string('abbreviation')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.table('create_table_clients', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreateTableClientsSchema

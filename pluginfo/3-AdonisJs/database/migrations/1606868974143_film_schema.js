'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmSchema extends Schema {
  up () {
    this.create('films', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.date('releaseDate').notNullable()
      table.string('genre').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }
}

module.exports = FilmSchema

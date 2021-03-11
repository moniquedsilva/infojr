'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ response }) => {
  return response.json({ greeting: 'Welcome to Film Database' })
})

Route.post('register', 'FilmController.store')
Route.get('films', 'FilmController.getAllFilms')
Route.get('films/:id', 'FilmController.getOneFilm')
Route.get('search', 'FilmController.getFilmByName')
Route.put('films/:id', 'FilmController.update')
Route.delete('films/:id', 'FilmController.delete')

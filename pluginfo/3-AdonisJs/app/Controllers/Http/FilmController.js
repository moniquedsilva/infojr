'use strict'

const Film = use('App/Models/Film')
const Database = use('Database')
const { validateAll } = use('Validator')

class FilmController {

    async store ({ request, response }) {
        try{
            const badRequest = {
                'name.required': 'You must provide a name.',
                'releaseDate.required': 'You must provide a date.',
                'releaseDate.date': 'Use YYYY-MM-DD as date format. Ex: 2020-12-05',
                'genre.required': 'You must provide a genre name.',
                'genre.string': 'Only sequence of characters are accepted. Ex: Drama',
                'description.required': 'You must provide a description'
            }

            const validation = await validateAll(request.all(), {
                    name: 'required',
                    releaseDate: 'required|date',
                    genre: 'required|string',
                    description: 'required'
                }, badRequest)

            if (validation.fails()) {
                return response.status(401).json({ message: validation.messages() })
            }

            const data = request.only(['name', 'releaseDate', 'genre', 'description'])
            const registerFilm = await Film.create(data)

            return response.status(201).json({
                message: 'Film successfully registered.',
                data: registerFilm 
            })
        } 
        catch (err) {
            return response.status(500).send({message: `Error: ${err.message}`})
        }
    }

    async getAllFilms ({ request, response }){
        const pageNumber = request.input('page', 1)
        const filmList = await Database
            .from('films')
            .orderBy('id', 'desc')
            .paginate(pageNumber, 10)

        if (Object.keys(filmList.data).length === 0) {
            return response.json({ message: 'No films available.' })
        }

        return response.status(201).json({
            message: 'List of all films',
            data: filmList
        })
    }

    async getOneFilm ({ params, response }) {
        const film = await Film.find(params.id)
    
        if (!film) {
            return response.status(404).json({ message: 'Film not found.' })
        }
        return response.status(200).json({ 
            message: 'Result:',
            data: film 
        })
    }

    async getFilmByName ({ request, response }) {
        const search = request.all(['page', 'name'])
        const nameFilm = search.name
        const pageNumber = parseInt(search.page)

        const searchFilm = await Database.from('films').where(function () {
            this.where('name', nameFilm)
        })
        .orderBy('id', 'desc')
        .paginate(pageNumber ? pageNumber : 1, 10)
    
        if (Object.keys(searchFilm.data).length === 0) {
            return response.json({ message: 'No films available.' })
        }

        return response.status(200).json({ 
             message: `Result for ${nameFilm}`,
             data: searchFilm 
        })
    }

    async update ({ params, request, response }) {
        const film = await Film.find(params.id)
  
        if (!film) {
            return response.status(404).json({ message: 'Film not found.' })
        }
            
        const body = request.only(['name', 'releaseDate', 'genre', 'description'])
        
        film.name = body.name
        film.releaseDate = body.releaseDate
        film.genre = body.genre
        film.description = body. description
        
        await film.save()
        
        return response.status(200).json({
            message: 'Film successfully updated.',
            data: film
        })
    }
    
    async delete ({ response, params }) {
        const film = await Film.find(params.id)

        if (!film) {
            return response.status(404).json({ message: 'Film not found.' })
        }

        await film.delete()
        
        return response.status(200).json({ message: 'Film successfully deleted.' })
    }
}

module.exports = FilmController

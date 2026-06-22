import { api } from './apiClient.js'

function normalizeMovie(movie) {
  return {
    id: movie.id || movie._id,
    starRating: movie.starRating ?? (movie.rating != null ? movie.rating.toString() : undefined),
    releaseDate: movie.releaseDate ?? movie.release_date,
    formats: movie.formats ?? ['2D'],
    cast: movie.cast ?? [],
    description:
      movie.description ||
      movie.synopsis ||
      'A thrilling cinematic experience.',
    ...movie,
  }
}

function normalizeTheatre(theatre) {
  return {
    id: theatre.id || theatre._id,
    price: theatre.price ?? theatre.priceRange,
    showTimes: theatre.showTimes ?? theatre.shows ?? [],
    ...theatre,
  }
}

export async function getMovies() {
  const movies = await api('/movies')
  return movies.map(normalizeMovie)
}

export async function getTheatres() {
  const theatres = await api('/theatres')
  return theatres.map(normalizeTheatre)
}

export async function getMovieById(movieId) {
  const movies = await getMovies()
  return movies.find((movie) => movie.id === movieId)
}

export async function getTheatreById(theatreId) {
  const theatres = await getTheatres()
  return theatres.find((theatre) => theatre.id === theatreId)
}

import express from 'express'
import Movie from '../models/Movie.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 })
    res.json(movies)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movies', error: error.message })
  }
})

export default router

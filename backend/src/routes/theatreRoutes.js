import express from 'express'
import Theatre from '../models/Theatre.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const theatres = await Theatre.find().sort({ createdAt: -1 })
    res.json(theatres)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch theatres', error: error.message })
  }
})

export default router

import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import theatreRoutes from './routes/theatreRoutes.js'

dotenv.config()

const app = express()

// Middleware runs before routes. JSON middleware lets Express read req.body.
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Movie booking API is running' })
})

app.use('/auth', authRoutes)
app.use('/movies', movieRoutes)
app.use('/theatres', theatreRoutes)
app.use('/bookings', bookingRoutes)

export default app

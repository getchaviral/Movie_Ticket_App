import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import Booking from './models/Booking.js'
import Movie from './models/Movie.js'
import Show from './models/Show.js'
import Theatre from './models/Theatre.js'
import User from './models/User.js'

dotenv.config()

async function seedDatabase() {
  try {
    await connectDB()

    // Clear old demo data so running the seed twice does not create duplicates.
    await User.deleteMany()
    await Movie.deleteMany()
    await Theatre.deleteMany()
    await Show.deleteMany()
    await Booking.deleteMany()

    const hashedPassword = await bcrypt.hash('123456', 10)

    const user = await User.create({
      name: 'Demo User',
      email: 'demo@movie.com',
      password: hashedPassword,
    })

    const movie = await Movie.create({
      title: 'Meg 2: The Trench',
      genre: 'Action, Sci-fi, Horror',
      description:
        'A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation.',
      releaseDate: '10 June 2026',
      ageRating: 'PG-13',
      rating: 5.1,
      formats: ['2D', '3D'],
      poster: 'https://image.tmdb.org/t/p/w342/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
      banner: 'https://image.tmdb.org/t/p/w780/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg',
      cast: [
        {
          name: 'Jason Statham',
          character: 'Jonas Taylor',
          image: 'https://image.tmdb.org/t/p/w185/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg',
        },
        {
          name: 'Jing Wu',
          character: 'Jiuming Zhang',
          image: 'https://image.tmdb.org/t/p/w185/3mV835YJO7wABU9KMRkM9Jc3o4l.jpg',
        },
      ],
    })

    const theatre = await Theatre.create({
      name: 'The Grandview',
      address: 'Camp Aguinaldo, Quezon City',
      priceRange: 'Rs 320 - Rs 450',
      logo: 'CINEMA',
    })

    const show = await Show.create({
      movie: movie._id,
      theatre: theatre._id,
      date: 'Friday, October 10',
      time: '10:00 AM',
      screen: 'Screen 1',
      format: '2D',
      occupiedSeats: ['J9', 'J10'],
    })

    await Booking.create({
      user: user._id,
      movie: movie._id,
      theatre: theatre._id,
      show: show._id,
      date: 'Friday, October 10',
      time: '10:00 AM',
      screen: 'Screen 1',
      format: '2D',
      seats: ['J9', 'J10'],
      totalAmount: 580,
      status: 'active',
    })

    console.log('Demo data inserted successfully')
    console.log('Demo login: demo@movie.com / 123456')
  } catch (error) {
    console.error('Seeding failed:', error.message)
  } finally {
    await mongoose.connection.close()
  }
}

seedDatabase()

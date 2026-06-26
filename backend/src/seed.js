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

    const movies = await Movie.insertMany([
      {
        title: 'Meg 2: The Trench',
        genre: 'Action, Sci-fi, Horror',
        description:
          'A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation.',
        releaseDate: '10 June 2026',
        ageRating: 'PG-13',
        rating: 5.1,
        formats: ['2D', '3D'],
        poster: 'https://picsum.photos/342/513?random=1',
        banner: 'https://picsum.photos/780/438?random=1',
        cast: [
          {
            name: 'Jason Statham',
            character: 'Jonas Taylor',
            image: 'https://picsum.photos/185/278?random=11',
          },
          {
            name: 'Jing Wu',
            character: 'Jiuming Zhang',
            image: 'https://picsum.photos/185/278?random=12',
          },
        ],
      },
      {
        title: 'Deadpool & Wolverine',
        genre: 'Action, Comedy',
        description:
          'The Merc with a Mouth teams up with the best there is in this highly anticipated action-packed adventure.',
        releaseDate: '26 July 2024',
        ageRating: 'R',
        rating: 8.0,
        formats: ['2D', 'IMAX'],
        poster: 'https://picsum.photos/342/513?random=2',
        banner: 'https://picsum.photos/780/438?random=2',
        cast: [
          {
            name: 'Ryan Reynolds',
            character: 'Deadpool',
            image: 'https://picsum.photos/185/278?random=21',
          },
          {
            name: 'Hugh Jackman',
            character: 'Wolverine',
            image: 'https://picsum.photos/185/278?random=22',
          },
        ],
      },
      {
        title: 'Inside Out 2',
        genre: 'Animation, Comedy, Family',
        description:
          'Teenager Riley experiences new emotions when a new headquarters is introduced to manage her changing heart.',
        releaseDate: '14 June 2024',
        ageRating: 'PG',
        rating: 7.8,
        formats: ['2D', '3D'],
        poster: 'https://picsum.photos/342/513?random=3',
        banner: 'https://picsum.photos/780/438?random=3',
        cast: [
          {
            name: 'Amy Poehler',
            character: 'Joy',
            image: 'https://picsum.photos/185/278?random=31',
          },
          {
            name: 'Phyllis Smith',
            character: 'Sadness',
            image: 'https://picsum.photos/185/278?random=32',
          },
        ],
      },
      {
        title: 'Dune: Part Two',
        genre: 'Action, Adventure, Sci-Fi',
        description:
          'Paul Atreides travels to the dangerous planet Arrakis to ensure the future of his family and people.',
        releaseDate: '29 February 2024',
        ageRating: 'PG-13',
        rating: 8.1,
        formats: ['2D', 'IMAX'],
        poster: 'https://picsum.photos/342/513?random=4',
        banner: 'https://picsum.photos/780/438?random=4',
        cast: [
          {
            name: 'Timothée Chalamet',
            character: 'Paul Atreides',
            image: 'https://picsum.photos/185/278?random=41',
          },
          {
            name: 'Zendaya',
            character: 'Chani',
            image: 'https://picsum.photos/185/278?random=42',
          },
        ],
      },
      {
        title: 'The Brutalist',
        genre: 'Drama',
        description:
          'An ambitious industrialist hires an architect to build his sprawling estate, leading to complex relationships and artistic visions.',
        releaseDate: '10 December 2023',
        ageRating: 'R',
        rating: 7.5,
        formats: ['2D'],
        poster: 'https://picsum.photos/342/513?random=5',
        banner: 'https://picsum.photos/780/438?random=5',
        cast: [
          {
            name: 'Adrien Brody',
            character: 'László Tóth',
            image: 'https://picsum.photos/185/278?random=51',
          },
          {
            name: 'Guy Pearce',
            character: 'Van Buren',
            image: 'https://picsum.photos/185/278?random=52',
          },
        ],
      },
    ])

    const movie = movies[0]

    const theatres = await Theatre.insertMany([
      {
        name: 'The Grandview',
        address: 'Camp Aguinaldo, Quezon City',
        priceRange: 'Rs 320 - Rs 450',
        logo: 'CINEMA',
      },
      {
        name: 'Cineplex Prime',
        address: 'BGC, Taguig City',
        priceRange: 'Rs 380 - Rs 500',
        logo: 'CINEPLEX',
      },
      {
        name: 'Metro Cinema',
        address: 'Makati Commercial Center, Makati',
        priceRange: 'Rs 300 - Rs 400',
        logo: 'METRO',
      },
    ])

    const theatre = theatres[0]

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

export const movies = [
  {
    id: 'meg-2',
    title: 'Meg 2: The Trench',
    genre: 'Action, Sci-fi, Horror',
    rating: '4.5',
    ageRating: 'PG-13',
    starRating: '5.1',
    description:
      'A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation.',
    releaseDate: '10 June 2026',
    formats: ['2D', '3D'],
    poster: 'https://image.tmdb.org/t/p/w342/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
    banner: 'https://image.tmdb.org/t/p/w780/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg',
    cast: [
      {
        id: 'jason-statham',
        name: 'Jason Statham',
        character: 'Jonas Taylor',
        image: 'https://image.tmdb.org/t/p/w185/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg',
      },
      {
        id: 'jing-wu',
        name: 'Jing Wu',
        character: 'Jiuming Zhang',
        image: 'https://image.tmdb.org/t/p/w185/3mV835YJO7wABU9KMRkM9Jc3o4l.jpg',
      },
      {
        id: 'shuya-sophia',
        name: 'Shuya Sophia Cai',
        character: 'Meiying',
        image: 'https://image.tmdb.org/t/p/w185/mV8T9YJvUP1GxZA0GzB7qTg6TNL.jpg',
      },
    ],
  },
  {
    id: 'nun-2',
    title: 'The Nun II',
    genre: 'Horror',
    rating: '4.5',
    poster: 'https://image.tmdb.org/t/p/w342/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
    banner: 'https://image.tmdb.org/t/p/w780/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
  },
  {
    id: 'fast-x',
    title: 'Fast X',
    genre: 'Action, Adventure',
    rating: '4.5',
    poster: 'https://image.tmdb.org/t/p/w342/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
    banner: 'https://image.tmdb.org/t/p/w780/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
  },
  {
    id: 'john-wick',
    title: 'John Wick',
    genre: 'Action, Thriller',
    rating: '4.5',
    poster: 'https://image.tmdb.org/t/p/w342/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
    banner: 'https://image.tmdb.org/t/p/w780/h8gHn0OzBoaefsYseUByqsmEDMY.jpg',
  },
]

export const theatres = [
  {
    id: 'grandview',
    name: 'The Grandview',
    address: 'Camp Aguinaldo, Quezon City',
    price: 'Rs 320 - Rs 450',
    logo: 'CINEMA',
  },
  {
    id: 'play-loft',
    name: 'Play Loft',
    address: 'Aurora Boulevard, Santa Mesa',
    price: 'Rs 300 - Rs 430',
    logo: 'PL',
  },
  {
    id: 'cinema-one',
    name: 'CinemaOne',
    address: 'A Cruz, Pasay City',
    price: 'Rs 320',
    logo: 'C1',
  },
  {
    id: 'cinemount',
    name: 'Cinemount',
    address: 'Baclaran, Paranaque City',
    price: 'Rs 350',
    logo: 'MOUNT',
  },
]

export const dummyBooking = {
  bookingId: 'CU-BOOKING-1001',
  movie: movies[0],
  theatre: theatres[0],
  schedule: {
    date: 'Friday, October 10',
    time: '10:00 AM',
    format: '2D',
    screen: 'Screen 1',
  },
  seats: ['H10', 'H11'],
  amountPaid: 580,
  transactionDate: '10/9/2023 10:45 AM',
}

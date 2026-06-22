import mongoose from 'mongoose'

const castSchema = new mongoose.Schema(
  {
    name: String,
    character: String,
    image: String,
  },
  { _id: false },
)

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: String,
    description: String,
    releaseDate: String,
    ageRating: String,
    rating: Number,
    formats: [String],
    poster: String,
    banner: String,
    cast: [castSchema],
  },
  { timestamps: true },
)

export default mongoose.model('Movie', movieSchema)

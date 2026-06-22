import mongoose from 'mongoose'

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Theatre',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    screen: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    occupiedSeats: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
)

// One show should exist for one exact movie/theatre/date/time/screen/format.
// This helps prevent duplicate show records for the same showtime.
showSchema.index(
  { movie: 1, theatre: 1, date: 1, time: 1, screen: 1, format: 1 },
  { unique: true },
)

export default mongoose.model('Show', showSchema)

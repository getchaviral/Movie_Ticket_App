import mongoose from 'mongoose'

const theatreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    priceRange: {
      type: String,
      required: true,
    },
    logo: String,
  },
  { timestamps: true },
)

export default mongoose.model('Theatre', theatreSchema)

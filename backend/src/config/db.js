import dns from 'node:dns'
import mongoose from 'mongoose'

async function connectDB() {
  try {
    // MongoDB Atlas connection strings use DNS SRV records.
    // If Node cannot resolve those records on a network, DNS_SERVERS lets us override DNS.
    if (process.env.DNS_SERVERS) {
      dns.setServers(process.env.DNS_SERVERS.split(','))
    }

    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDB

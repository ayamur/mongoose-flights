import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new mongoose.Schema({
  airline: String,
  airport: String,
  flightNo: {type: Number},
  departs: Date,
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
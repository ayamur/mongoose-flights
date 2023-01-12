import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Spaghetti', 'Styx', 'T.A.R.D.I.S', 'Aranae', 'Airpline']
  },
  airport: {
    type: String, 
    enum: ['DEN', 'DFW', 'AUS', 'LAX', 'SAN', 'HLS', 'Z11', '616', 'VLH', 'HDS', 'TIR'],
    required: true,
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date, 
    default: function() {
      return new Date().getFullYear() + 1
    },
    min: 2023,
    required: true
  }
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
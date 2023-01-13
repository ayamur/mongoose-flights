import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: 
  {type: String, match: /[A-F][1-9]\d?/},
  price: 
  {type: Number, min: 0},
}, {
  timestamps: true
})

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Spaghetti', 'Styx', 'TARDIS', 'Aranae', 'Airpline']
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
    required: true,
  },
  tickets: [ticketSchema],
  menu: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
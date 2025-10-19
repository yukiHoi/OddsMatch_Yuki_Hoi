const mongoose = require('mongoose');


const MarketSchema = new mongoose.Schema({
  type: { type: String, enum: ['Back', 'Each-Way'], required: true },
  odds: { type: Map, of: Number, required: true }, 
  best: {
    price: { type: Number, required: true },
    bookmaker: { type: String, required: true }
  }
});

const HorseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    breed: { type: String, required: true },
    market: { type: [MarketSchema], required: true }
});

const RaceSchema = new mongoose.Schema({
    course: { type: String, required: true },
    raceTime: { type: String, required: true },
    date: { type: Date, required: true },
    distance: String,
    type: String,
    description: String,
    horses: { type: [HorseSchema], required: true }
});

module.exports = mongoose.model.Race || mongoose.model('Race', RaceSchema);

'use strict';

import mongoose from 'mongoose';

const countrySchema = mongoose.Schema({
  region: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: () => new Date(),
  },
  // this is your "many" model to think about tomorrow
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'place', // your "many" model name goes here
    },
  ],
});

export default mongoose.model('country', countrySchema);

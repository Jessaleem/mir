const mongoose = require('mongoose')

const spaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  how_many: {
    type: String,
    required: true,
  },
  adress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zip_code: {
      type: String,
      required: false
    }
  },
  owner: {
    type: String,
  },
  type: {
    house:{
      type: Boolean,
    },
    apartament: {
      type: Boolean,
    },
    ranch: {
      type: Boolean,
    },
    bed_and_breakfast: {
      type: Boolean,
    }
  },
  privacity_type: {
    entire_place: {
      type: Boolean,
    },
    private_room: {
      type: Boolean,
    },
    shared_room: {
      type: Boolean,
    }
  },
  amenities: {
    beds: {
      type: String,
      required: true,
    },
    kitchen: {
    type: Array,
    of: String,
  },
  bathroom: {
    type: Array,
    of: String,
  },
  bedroom_and_laundry: {
    type: Array,
    of: String,
  },
  facilities: {
    type: Array,
    of: String,
  },
  entertaiment: {
    type: Array,
    of: String,
  },
},
  description: {
    type: String,
    required: true,
  }
}, {timestamps: true});

const Space = mongoose.model('airbnb1', spaceSchema);

module.exports = Space;

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _id: {
    type: String,
    match: /^\d{17,19}$/,
  },
  blacklisted: {
    type: Boolean
  },
  premium: {
    type: Boolean,
    default: 0
  },
  pixels: {
    type: Number,
    default: 0
  },
  daily:{
    type: Number
  },
  sobre: {
    type: String,
    default: "Conte mais sobre você aqui!"
  },

})

module.exports = mongoose.model("user", schema)

const mongoose = require ("./connection.js")

const DesignSchema = new mongoose.Schema ({
  name: String,
  designer: String,
  imageURL: String,
  material: String

})

const Design = mongoose.model('Design', DesignSchema)

module.exports = { Design }

const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/kicksstarter', (err) => {
  if(err){
    console.log(err)
  } else {
    console.log("PRAISE THE MONGOD")
  }
})

module.exports = mongoose

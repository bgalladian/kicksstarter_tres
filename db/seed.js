const Design = require('./models.js').Design
let seedData = require ('./seedData.json')

Design.remove({}, () => {
  Design.create(seedData, () => {
    process.exit()
  })
})

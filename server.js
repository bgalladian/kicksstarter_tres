'use strict'

const express = require('express')
const parser = require('body-parser');
const mongoose = require('./db/connection.js');
const Design = require('./db/models.js').Design

const app = express()
const router = express.Router()
// maybe use this to connect front end to backend, cross origin resource sharing
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //and remove cacheing so we get the most recent updates
  res.setHeader('Cache-Control', 'no-cache');
  next();
 });

app.set('view engine', 'react')
app.set("port", process.env.PORT || 3001);

mongoose.connect('mongodb://bedig:bedig@ds161860.mlab.com:61860/kicksstarter')

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());


//now we can set the roude path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//adding the /comments route to our /api router
router.route('/designs')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Design.find(function(err, designs) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(designs)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var comment = new Design();
    //body parser lets us use the req.body
    design.name = req.body.author;
    design.designer = req.body.designer;
    design.imageURL = req.body.imageURL;
    design.material = req.body.material;

    Design.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Design successfully added!' });
    });
  });





//Use our router configuration when we call /api
app.use('/api', router);

// listen for the server request
app.listen(app.get("port"), () => {
  console.log(`api running`);
})

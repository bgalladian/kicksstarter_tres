const express = require('express')
const parser = require('body-parser');
const mongoose = require('../db/connection.js');
const Design = require('../db.models.js').Design

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

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());


//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);

// listen for the server request
app.listen(app.get("port"), () => {
  console.log(`api running`);
})

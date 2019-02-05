var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET mock DB data */
router.get('/', function(req, res, next) {
  fs.readFile("./db/mockdata", "utf8", function(err, data) {
    if(err) {
      console.log(err);
      res.send(err);
    }

    console.log("successful read data:", data);
    res.send(data);
  })
});

/* POST mock DB data */
router.post('/', function(req, res, next) {

  console.log("Got something:", req);

  fs.writeFile("./db/mockdata", req.body.eyeData, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("Saved req.body.eyeData to mock data.");
  });

  res.send('you have reached the mock db');
});

module.exports = router;
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

  // TODO
  console.log("Got something:", req);

  fs.writeFile("./db/mockdata", "Howdy partner!", function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("saved something");
  });

  res.send('mock db');
});

module.exports = router;
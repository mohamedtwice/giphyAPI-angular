var express = require('express');
var router = express.Router();

var search = [];
var temp = {
  searchtext: 'mmmBop',
};
search.push(temp);
var temp = {
  searchtext: 'mmm',
};
search.push(temp);

router.get('/', function(req, res) {
  res.send(search);
});

module.exports = router;

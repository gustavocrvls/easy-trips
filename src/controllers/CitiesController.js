var fs = require('fs');
var cities = require('../database/cities.json');

module.exports = {
  index (req, res) {
    res.json({ data: cities });
  },
}
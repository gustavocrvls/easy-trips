var fs = require('fs');
var cities = require('../database/cities.json');

module.exports = {
  index (req, res) {
    cities = cities.map(city => ({...city, ticket: Number(city.ticket + 100)}))
    fs.writeFile('src/database/cities.json', JSON.stringify(cities), c => console.log(c))
    res.json({ data: cities });
  },
}
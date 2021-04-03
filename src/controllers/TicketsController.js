var fs = require('fs');
var tickets = require('../database/tickets.json');

module.exports = {
  index (req, res) {
    res.json({ data: tickets });
  },

  create (req, res) {
    const { 
      user,

      going_date,
      return_date,

      city_departure,
      city_destiny,

      kids,
      adults,
      elderly,

      card,
      value,
      plots,
    } = req.body;

    tickets.push({
      id: new Date().getTime(),
      user,

      going_date,
      return_date,

      city_departure,
      city_destiny,
            
      kids,
      adults,
      elderly,

      card,
      value,
      plots,
    });

    fs.writeFile('src/database/tickets.json', JSON.stringify(tickets), t => console.log(t))

    res.json({data: tickets});
  }
}
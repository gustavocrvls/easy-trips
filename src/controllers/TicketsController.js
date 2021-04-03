var fs = require('fs');
var tickets = require('../database/tickets.json');

module.exports = {
  index (req, res) {
    res.json({ data: tickets });
  },

  create (req, res) {
    const { 
      total,
      destinyCityId,
      departureCityId,

      nAdults,
      nKids,
      nElderly,

      goingDate,
      backDate,

      email,
      card,
      plots
    } = req.body;

    tickets.push({
      id: new Date().getTime(),
      total,
      destinyCityId,
      departureCityId,

      nAdults,
      nKids,
      nElderly,

      goingDate,
      backDate,

      email,
      card,
      plots
    });

    fs.writeFile('src/database/tickets.json', JSON.stringify(tickets), t => console.log(t))

    res.json({data: tickets});
  }
}
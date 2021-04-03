var fs = require('fs');
var tickets = require('../database/accommodations.json');

module.exports = {
  index (req, res) {
    res.json({ data: tickets });
  },

  create (req, res) {
    const { 
      user,

      entry_date,
      exit_date,

      city,
            
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

      entry_date,
      exit_date,

      city,
            
      kids,
      adults,
      elderly,

      card,
      value,
      plots,
    });

    fs.writeFile('src/database/accommodations.json', JSON.stringify(tickets), t => console.log(t))

    res.json({data: tickets});
  }
}
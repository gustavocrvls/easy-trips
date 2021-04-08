var fs = require('fs');
var tickets = require('../database/accommodations.json');
var nodemailer = require('nodemailer');

module.exports = {
  index(req, res) {
    res.json({ data: tickets });
  },

  create(req, res) {
    const {
      total,
      cityId,

      nAdults,
      nKids,
      nElderly,

      nRooms,

      goingDate,
      backDate,

      paiment
    } = req.body;

    tickets.push({
      id: new Date().getTime(),
      total,
      cityId,

      nAdults,
      nKids,
      nElderly,

      nRooms,

      goingDate,
      backDate,

      paiment
    });

    fs.writeFile('src/database/accommodations.json', JSON.stringify(tickets), t => console.log(t));

    res.json({ data: tickets });
  }
}
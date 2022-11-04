const mongoose = require("mongoose");
const c = require("colors");
require('dotenv').config()
module.exports = {
  start() {
    try {
      (`${process.env.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });

      console.log(c.red(`[DataBase] - Conectado ao Banco de Dados.`));
    } catch (err) {
      if (err) return console.log(c.red(`[DataBase] - ERROR:`, +err));
    }
  },
};
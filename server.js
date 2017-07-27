const express = require("express"),
      bodyParser = require("body-parser"),
      cors = require("cors"),

      APP = module.exports = express(),
      CTRL = require("./ctrl"),

      PORT = 3000;

APP.use(bodyParser.json());
APP.use(cors());

APP.get('/api/users', CTRL.getAllUsers);


APP.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
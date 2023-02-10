const express = require("express");
const routes = require("../routes");

const server = express();
server.use(express.json());

server.use('/v1/api', routes);

module.exports = server;
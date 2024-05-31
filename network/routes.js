const express = require('express');
const shipment = require('../components/shipment/network');
const user = require('../components/User/network');
// const chat = require('../components/chat/network');

const routes = function (server) {
    server.use('/user', user);
    server.use('/shipment', shipment);    
}

module.exports = routes;
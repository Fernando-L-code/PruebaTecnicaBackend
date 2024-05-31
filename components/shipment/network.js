const express = require('express');

const response = require('../../utils/response.js');
const Controller = require('./controller');

const router = express.Router();


router.get('/list', function(req, res) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    Controller.getListShipment(req.query, token)
        .then(list => {
            response.success(req, res, list, 200);
        })
         .catch((err) => {
            console.log(err);
            // Verificar si el error tiene un código de estado específico
            const status = err.response?.status || 500;
            const message = err.response?.data?.message || err.message || 'Internal Server Error';
            
            response.error(req, res, message, status, err.message);
        })
})

router.post('/status', function(req, res) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    Controller.getStatusShipment(req.body, token)
        .then(token => {
 
            response.success(req, res, token, 200);
        })
         .catch((err) => {
            response.error(req, res, err.message, 500);
        })
})


module.exports = router;
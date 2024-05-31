const express = require('express');

const response = require('../../utils/response.js');
const Controller = require('./controller');

const router = express.Router();

router.post('/login', function(req, res) {

    Controller.getToken(req,res)
        .then(token => {
            response.success(req, res, token, 200);
        })
         .catch((err) => {
            // console.log(err);
            // Verificar si el error tiene un código de estado específico
            const status = err.response?.status || 500;
            const message = err.response?.data?.message || err.message || 'Internal Server Error';
            
            response.error(req, res, message, status, err.message);
        })
})


module.exports = router;
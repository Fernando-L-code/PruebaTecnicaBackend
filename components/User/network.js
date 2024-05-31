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
            response.error(req, res, err.message, 500);
        })
})


module.exports = router;
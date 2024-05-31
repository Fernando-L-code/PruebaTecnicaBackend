
const apiService = require('../../services/apiService');
const response = require('../../utils/response');
const config = require('../../config');

const getToken = async (req, res) => {
    try {
        const { email, password } = req.body;

        const users = await apiService.postData(config.api.endpoints.token, {email, password});
        return users;

    } catch (error) {
        throw error;
    }
};


module.exports = {
    getToken,
};
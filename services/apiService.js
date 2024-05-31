const axios = require('axios');
const config = require('../config.js');

const apiClient = axios.create({
    baseURL: config.api.weship
});

const getData = async (endpoint, params = {}, token = null) => {
    try {
        const queryParams = new URLSearchParams();
        for (const key in params) {
            queryParams.append(key, params[key]);
        }
        
       
        const url = `${endpoint}?${queryParams.toString()}`;

        const headers = {};
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await apiClient.get(url, { headers });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw error;
        } else {
            throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
        }
    }
};

const postData = async (endpoint, data = {}, token = null) => {
    try {

        const headers = {};
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await apiClient.post(endpoint, data, { headers });
        // console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw error;
        } else {
            throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
        }
    }
};

module.exports = {
    getData,
    postData
};
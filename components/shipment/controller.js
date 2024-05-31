
const apiService = require('../../services/apiService');
const response = require('../../utils/response');
const config = require('../../config');

const getListShipment = async (queryParams, token) => {
    try {
        const { where, limit, offset, sortBy, sortDir } = queryParams;

        const params = {};
        if (where) params.where = JSON.stringify(JSON.parse(where)); // Asegúrate de que 'where' es un objeto válido
        if (limit) params.limit = limit;
        if (offset) params.offset = offset;
        if (sortBy) params.sortBy = sortBy;
        if (sortDir) params.sortDir = sortDir;

        const response = await apiService.getData(config.api.endpoints.ShipmentsList, params, token);

        return response;

    } catch (error) {
        throw error;
    }
};

const getStatusShipment = async (queryParams, token) => {
    try {
   
        const { courier, tracking } = queryParams;

        const response = await apiService.postData(config.api.endpoints.ShipmentsStatus,  {"shipments" :[{courier, tracking}]}, token);

        return response;

    } catch (error) {
        throw error;
    }
};


module.exports = {
    getListShipment,
    getStatusShipment
};
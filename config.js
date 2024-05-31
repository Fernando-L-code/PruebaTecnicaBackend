module.exports={
    api:{
        weship: process.env.WHESHIP || 'https://track.weship.com/api/v1/',
        endpoints: {
            token: 'auth/login',
            ShipmentsList: 'shipment/list',
            ShipmentsStatus: 'tracking/getStatus'
        }
    },

    server: {
        port: process.env.PORT || 3001
    }
    
}
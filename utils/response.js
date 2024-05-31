const success = ( req, res, message, status)=>{
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

const error = (req, res, error, status, details )=>{
    // console.error('[response error] ' + details);
    console.error('[response error] ' + res);


    let response = {
        error: error,
        message: details || ""
    };

    // Verificar si el error es un objeto y tiene la propiedad `inner`
    if (error && typeof error === 'object' && error.inner) {
        response = {
            error: error.name || "UnknownError",
            message: error.inner.message || error.message || ""
        };
    }
    
    res.status(status || 500).send(response);
}

module.exports = {
    success,
    error
};
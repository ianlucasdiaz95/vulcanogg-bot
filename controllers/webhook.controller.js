const { response, request } = require('express');


const webhookEn = (req = request, res = response) => {

    console.log(req.body);

     res.json({
        msg: 'Endpoint Deshabilitado',
    });

}



module.exports = {
    webhookEn
}
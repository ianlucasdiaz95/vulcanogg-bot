const { response, request } = require('express');


const baseGet = (req = request, res = response) => {

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const basePost = (req, res = response) => {

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const basePut = (req, res = response) => {

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const basePatch = (req, res = response) => {
     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const baseDelete = (req, res = response) => {
     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}




module.exports = {
    baseGet,
    basePost,
    basePut,
    basePatch,
    baseDelete,
}
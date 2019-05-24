const ItensDAO = require('../DAO/ItensDAO');


module.exports = function(){
    let controller = {};
    

    controller.listaItens = (req,res,next) =>{
        new ItensDAO(req.connection)
        .list()
        .then(item => res.json(item))
        .catch(next);
    }

    return controller;
}
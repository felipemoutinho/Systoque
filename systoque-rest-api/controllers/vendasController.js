const VendasDAO = require('../DAO/VendasDAO');
const ItensDAO = require('../DAO/ItensDAO');

module.exports = function(){
    var controller = {};

    controller.listaVendas = (req,res,next) => {
        new VendasDAO(req.connection)
        .list()
        .then(vendas => res.json(vendas))
        .catch(next);
    };

    controller.selecionaVenda = (req,res,next) => {
        new VendasDAO(req.connection)
        .listOne(req.params.codvenda)
        .then(venda => res.json(venda))
        .catch(next);
    };

    controller.addVenda = (req,res,next) => {
        
        new VendasDAO(req.connection)
        .create(req.body)
        .then(venda => res.json(venda))
        .catch(next);

        
    };
    
    controller.deleteVenda = (req,res,next) => {
        new VendasDAO(req.connection)
        .delete(req.params.codvenda)
        .then(venda => res.json(venda))
        .catch(next);
    };

    controller.alteraVenda = (req,res,next) => {
        new VendasDAO(req.connection)
        .update(req.body,req.params.codvenda)
        .then(venda => res.json(venda))
        .catch(next);
    }

    return controller;
}
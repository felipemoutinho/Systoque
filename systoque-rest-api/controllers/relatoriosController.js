const RelatoriosDAO = require('../DAO/RelatoriosDAO');

module.exports = function(){
    var controller = {};

    controller.extratoComissao = (req,res,next) => {
        new RelatoriosDAO(req.connection)
        .extrato(req.body)
        .then(relatorio => res.json(relatorio))
        .catch(next);
    };

    controller.produtosEmFalta = (req,res,next) => {
        new RelatoriosDAO(req.connection)
        .produtosEmFalta()
        .then(relatorio => res.json(relatorio))
        .catch(next);
    };

    controller.produtosEmEstoque = (req,res, next) => {
        new RelatoriosDAO(req.connection)
        .produtosEmEstoque()
        .then(relatorio => res.json(relatorio))
        .catch(next);
    }

    controller.faturamento = (req,res,next) => {
        new RelatoriosDAO(req.connection)
        .faturamento(req.body)
        .then(relatorio => res.json(relatorio))
        .catch(next);
    }

    return controller;
}
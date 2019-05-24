module.exports = function(app){
    var controller = app.controllers.vendasController;

    app.get('/vendas',controller.listaVendas);

    app.get('/vendas/:codvenda',controller.selecionaVenda);

    app.post('/vendas',controller.addVenda);

    app.delete('/vendas/:codvenda',controller.deleteVenda);

    app.put('/vendas/:codvenda',controller.alteraVenda);
}
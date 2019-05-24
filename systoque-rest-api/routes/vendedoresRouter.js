module.exports = function(app){
    var controller = app.controllers.vendedoresController;

    app.get('/vendedores',controller.listaVendedores);

    app.get('/vendedores/:matricula',controller.selecionaVendedor);

    app.delete('/vendedores/:matricula',controller.excluirVendedor);

    app.post('/vendedores/',controller.insereVendedor);

    app.put('/vendedores/:matricula',controller.alteraVendedor);
};
module.exports = function(app){
    var controller = app.controllers.produtosController;

    app.get('/produtos',controller.listaProdutos);
    app.get('/produtos/:cb',controller.getProduto);
    app.post('/produtos',controller.criarProduto);
    app.put('/produtos/:cb',controller.alterarProduto);
    app.delete('/produtos/:cb',controller.deletaProduto);

}
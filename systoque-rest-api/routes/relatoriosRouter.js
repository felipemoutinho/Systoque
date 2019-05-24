module.exports = function(app){
    var controller = app.controllers.relatoriosController;

    app.post('/extrato-comissao', controller.extratoComissao);
    app.get('/produtos-em-falta', controller.produtosEmFalta);
    app.get('/produtos-em-estoque', controller.produtosEmEstoque);
    app.post('/faturamento', controller.faturamento);
    
}
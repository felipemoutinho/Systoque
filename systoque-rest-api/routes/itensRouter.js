module.exports = function(app){
    
    let controller = app.controllers.itensController;

    app.get('/itens',controller.listaItens);
}
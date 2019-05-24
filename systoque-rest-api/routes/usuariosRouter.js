module.exports = function(app){
    var controller = app.controllers.usuariosController;

    app.get('/usuarios',controller.listaUsuarios);

    app.get('/usuarios/:id',controller.selecionaUsuario);

    app.delete('/usuarios/:id',controller.excluirUsuario);

    app.post('/usuarios/',controller.insereUsuario);

    app.put('/usuarios/:id',controller.alteraUsuario);
};
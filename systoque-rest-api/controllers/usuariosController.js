const UsuarioDAO = require('../DAO/UsuarioDAO');
module.exports = function(){
    var controller = {};
    
    controller.listaUsuarios = (req,res,next) =>{
        new UsuarioDAO(req.connection)
        .list()
        .then(usuarios => res.json(usuarios))
        .catch(next);
    }

    controller.selecionaUsuario = (req,res,next) =>{
        new UsuarioDAO(req.connection)
        .listOne(req.params.id)
        .then(usuario => res.json(usuario))
        .catch(next);
    }
    

    controller.excluirUsuario = (req,res,next) =>{
        req.connection.query(`delete from usuario where idusuario = ${req.params.id}`,(err)=>{
            if(err) return next(err);
            res.send(204).end();
        })
    };

    controller.insereUsuario = (req,res,next) => {
        req.connection.query(`insert into usuario(login,senha,email) values ('${req.body.login}',md5('${req.body.senha}'),'${req.body.email}')`,(err,usuario) =>{
            if(err) return next(err);
            res.json(usuario);
        });
    };

    controller.alteraUsuario = (req,res,next) => {
        req.connection.query(`update usuario set login = '${req.body.login}',
        senha = md5('${req.body.senha}'), email = '${req.body.email}'
        where idusuario = '${req.params.id}'`,(err,usuario) => {
            if(err) return next(err);
            res.json(usuario);
        });
    };

    

    return controller;
};


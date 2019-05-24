module.exports = function(){
    var controller = {};
    
    
    controller.listaVendedores = (req,res,next)=>{
        req.connection.query('select * from tblvendedor', (err,vendedores)=>{
            if(err) return next(err);
            res.json(vendedores);
            
        })
    };

    controller.selecionaVendedor = (req,res,next) =>{
        req.connection.query(`select * from tblvendedor where Matricula = ${req.params.matricula}`,(err,vendedor)=>{
            if(err) return next(err);
            res.json(vendedor);
        })
    };

    controller.excluirVendedor = (req,res,next) =>{
        req.connection.query(`delete from tblvendedor where Matricula = ${req.params.matricula}`,(err)=>{
            if(err) return next(err);
            res.send(204).end();
        })
    };

    controller.insereVendedor = (req,res,next) => {
        console.log(req.body);
        req.connection.query(`insert into tblvendedor(Nome,DataNasc,comissao) 
        values ('${req.body.Nome}','${req.body.DataNasc}',${req.body.comissao})`,(err,vendedor) =>{
            if(err) return next(err);
            res.json(vendedor);
        });
        
    };

    controller.alteraVendedor = (req,res,next) => {
        req.connection.query(`update tblvendedor set Nome = '${req.body.nome}', 
        DataNasc = '${req.body.datanasc}', comissao = '${req.body.comissao}'
        where Matricula = '${req.params.matricula}'`,(err,vendedor) => {
            if(err) return next(err);
            res.json(vendedor);
        });
    };

    

    return controller;
};


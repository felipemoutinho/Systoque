module.exports = function(){
    var controller = {};

    controller.listaProdutos = (req,res,next)=>{
        req.connection.query('select * from tblproduto',(err,produtos) =>{
            if(err) return next(err);
            res.json(produtos);
        });
    };

    controller.getProduto = (req,res,next) =>{
        req.connection.query(`select * from tblproduto where CB = ${req.params.cb}`, (err,produto) =>{
            if(err) return next(err);
            res.json(produto);
        });
    }

    controller.criarProduto = (req,res,next) =>{
        if((req.body.dataValidade === null) || (req.body.dataValidade === '')) {
            req.connection.query(`insert into tblproduto(CB,nomeproduto,valorvenda,qtdprod,qtdminprod,PrazoGarantia)
            values ('${req.body.cb}','${req.body.nomeProduto}','${req.body.valorVenda}','${req.body.qtdProd}','${req.body.qtdMinProd}',
            '${req.body.prazoGarantia}')`,(err,produto)=>{
                if(err) return next(err);
                res.json(produto);
            });
        } 
        else{
            req.connection.query(`insert into tblproduto(CB,nomeproduto,valorvenda,qtdprod,qtdminprod,DataValidade,Lote)
            values ('${req.body.cb}','${req.body.nomeProduto}','${req.body.valorVenda}','${req.body.qtdProd}','${req.body.qtdMinProd}',
                '${req.body.dataValidade}','${req.body.lote}')`,(err,produto)=>{
                    if(err) return next(err);
                    res.json(produto);
                });
        }
    }

    controller.alterarProduto = (req,res,next) => {
        req.connection.query(`update tblproduto set CB = '${req.body.cb}',nomeproduto = '${req.body.nomeproduto}',valorvenda = '${req.body.valorvenda}',
        qtdprod = '${req.body.qtdprod}',
        qtdminprod = '${req.body.qtdminprod}',
        DataValidade = '${req.body.datavalidade}',
        Lote='${req.body.lote}',
        PrazoGarantia='${req.body.prazogarantia}'
        where CB = '${req.body.cb}'`,(err,produto) =>{
            
            if(err) return next(err);
            res.json(produto);
        });
    }

    controller.deletaProduto = (req,res,next) => {
        req.connection.query(`delete from tblproduto where CB = ${req.params.cb}`,(err,produto) =>{
            if(err) return next(err);
            res.json(produto);
        });
    }

    return controller;
}
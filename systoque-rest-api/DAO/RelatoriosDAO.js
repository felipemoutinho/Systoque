module.exports = class Relatorio{
    constructor(connection) {
        this._connection = connection;
    }

    extrato(extrato){
        return new Promise((resolve,reject)=>
            this._connection.query(`select codvenda, DataVenda,DataPrevEntrega,TotalVenda, ven.comissao, (v.TotalVenda * ven.comissao) as ComissaoTotal
                from tblvenda as v
                inner join tblvendedor as ven on v.Matricula = ven.Matricula
                where v.Matricula = ${extrato.vendedor}
                and DataVenda >= '${extrato.dataInicio}' and DataPrevEntrega <= '${extrato.dataFinal}'`,(err,relatorio)=>{
                if(err) reject(err);
                resolve(relatorio);
            })
        );
    }

    produtosEmFalta() {
        return new Promise((resolve,reject) =>
            this._connection.query('select cb,nomeProduto,qtdProd,qtdMinProd from tblproduto where qtdminprod > qtdprod', (err,relatorio) => {
                if(err) reject(err);
                resolve(relatorio);
            })
        );
    }

    produtosEmEstoque() {
        return new Promise((resolve,reject) =>
            this._connection.query('select cb,nomeProduto,qtdProd from tblproduto',(err, relatorio) =>{
                if(err) reject(err);
                resolve(relatorio);
            })
        );
    }

    faturamento(faturamento) {
        return new Promise((resolve,reject) =>
            this._connection.query(`select codvenda,DataVenda,TotalVenda from tblvenda 
            where DataVenda >= '${faturamento.dataInicio}' and DataVenda <= '${faturamento.dataFinal}'`,(err,relatorio) => {
                if(err) reject(err);
                resolve(relatorio);
            })
        );
    }
}
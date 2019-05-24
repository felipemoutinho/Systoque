module.exports = class Venda{
    constructor(connection){
        this._connection = connection;
    }

    list(){
        return new Promise((resolve,reject)=>
            this._connection.query('select * from tblvenda',(err,vendas)=>{
                if(err) reject(err);
                resolve(vendas);
            })
        );
    }

    listOne(codvenda){
        return new Promise((resolve,reject)=>
            this._connection.query(`select * from tblvenda where codvenda = ${codvenda}`,(err,venda)=>{
                if(err) reject(err);
                resolve(venda);
            })
        );
    }

    create(venda){
        return new Promise((resolve,reject) =>
            this._connection.query(`insert into tblvenda(DataVenda,DataPrevEntrega,Matricula,TotalVenda) 
            values ('${venda.dataPedido}', '${venda.dataPrevEntrega}',${venda.vendedor},${venda.valorTotal})`,(err,venda)=>{
                if(err) reject(err);
                resolve(venda);
            })
        );
    }

    delete(codvenda){
        return new Promise((resolve,reject)=>
            this._connection.query(`delete from tblvenda where codvenda = ${codvenda}`,(err,venda)=>{
                if(err) reject(err);
                resolve(venda);
            })
        );
    }

    update(venda,codvenda){
        return new Promise((resolve,reject)=>
            this._connection.query(`update tblvenda
            set DataVenda = '${venda.DataVenda}', DataPrevEntrega = '${venda.DataPrevEntrega}',
            TotalVenda = ${venda.TotalVenda}, StatusVenda = '${venda.StatusVenda}',
            Matricula = ${venda.Matricula} 
            where codvenda = ${codvenda}`,(err,venda)=>{
                if(err) reject(err);
                resolve(venda);
            })
        );
    }

    updateEstoque(valor) {
        this._connection.query(`insert into tblitem (valorItem,qtdItem,codVenda,cb) values `)
    }
}
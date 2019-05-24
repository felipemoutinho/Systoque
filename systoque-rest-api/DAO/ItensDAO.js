module.exports = class Itens {
    constructor(connection){
        this._connection = connection;
    }

    list(){
        return new Promise((resolve,reject) =>
            this._connection.query(`select * from tblitem`,(err,item)=>{
                if(err) reject(err);
                resolve(item);
            })
        );
    }

    create(venda) {
        return new Promise((resolve, reject)=>
            this._connection.query(`insert into tblitem (valorItem,qtdItem,codVenda,cb)
                values (${venda.valorItem}, ${venda.qtdItem},${venda.codVenda}, '${venda.cb}')`,(err,item)=>{
                    if(err) reject(err);
                    resolve(item);
                })
            );
    }
}
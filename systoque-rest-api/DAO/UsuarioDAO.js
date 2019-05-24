module.exports = class Usuario{
    constructor(connection){
        this._connection = connection;
    }

    list(){
        return new Promise((resolve,reject) =>
            this._connection.query('select * from usuario',(err,usuarios) =>{
                if(err) return reject(err);
                resolve(usuarios);
            })
        );
    }

    listOne(id){
        return new Promise((resolve,reject)=>
            this._connection.query(`select * from usuario where idusuario = ${id}`,(err,usuario) =>{
                if(err) return reject(err);
                resolve(usuario);
            })
        );
    }
}
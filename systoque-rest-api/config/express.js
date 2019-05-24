const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const pool = require('./dbConnection');
const connectionMiddleware = require('./connectionMiddleware');
const cors = require('cors');

module.exports = function(){
    var app = express();
    app.set('port',3000);
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(connectionMiddleware(pool));

    app.use(cors());

    app.use((err,req,res,next) =>{
        console.log(err.stack);
        res.status(500).json({erro: err.toString()});
    });    

    load('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
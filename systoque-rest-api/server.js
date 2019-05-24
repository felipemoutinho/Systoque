/* const http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server escutando na porta '+ app.get('port'));
}); */

const app = require('./config/express')();

app.listen(app.get('port'),()=>{
    console.log('Server Express escutando na porta ' + app.get('port'));
});
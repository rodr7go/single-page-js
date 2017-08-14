var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', {'title': 'Rodrigram'});
});

app.get('/signup', function(req, res){
    res.render('index');
});

app.get('/signin', function(req, res){
    res.render('index');
});

app.listen(3000, function (error){
    if (error) return console.log('hubo un error'), process.exit(1);
    return console.log('escuchando en puerto 3000');
});
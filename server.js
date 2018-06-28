var express = require('express');
var bodyPaser = require('body-parser');
var method = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8080;
var db = require('./models');

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: true}));
app.use(method('_method'));

app.engine('handlerbars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/burger_controller.js');

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log('http://localhost:'+PORT);
    })
})
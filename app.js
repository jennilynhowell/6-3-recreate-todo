const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const controllers = require('./controllers/controllers.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', controllers.index);

app.post('/new', controllers.new);

app.post('/done', controllers.done);

app.post('/delete', controllers.delete);

app.listen(3000);

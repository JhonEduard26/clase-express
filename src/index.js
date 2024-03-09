const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.set('views'), 'layouts'),
  partialsDir: path.join(app.set('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/contacto', require('./routes/contact'));
app.use('/app', require('./routes/app'));
app.use('/not-found', require('./routes/not-found'));
app.use((req, res) => {
  res.redirect('/not-found');
})

app.listen(app.get('port'), () => {
  console.log('127.0.0.1:', app.get('port'));
})
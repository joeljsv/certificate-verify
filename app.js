
const express = require('express');
const {dbUrl} = require('./config.js');
const mongoose = require('mongoose');
const route= require('./services/route');

viewPath = __dirname + '/views';
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/', route);
app.get('*', (req, res) => {
  res.render('404' );
});

console.log(dbUrl);

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
      console.log('Connected to MongoDB');
      app.listen(process.env.PORT || 3000);
      console.log('Listening on port', process.env.PORT || 3000);
    })
    .catch((err) => console.log(err));

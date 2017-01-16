var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
  secret: 'jsdf7389isacuy28',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000*60*60*24}
}))
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

// app.get('/try', (req, res) => res.send('Hello axios'));
// app.post('/axios', jsonParser, (req, res) => {
//   res.send(req.body);
// });

app.post('/signIn', jsonParser, (req, res) => {
  var {username, password} = req.body;
  if(username === 'khoapham' && password === '123'){
    req.session.username = username;
    return res.send('DANG_NHAP_THANH_CONG');
  }
  res.send('DANG_NHAP_THAT_BAI');
});

app.get('/getInfo', (req, res) => {
  if(req.session.username){
    return res.send(req.session.username);
  }
  res.send('CHUA_DANG_NHAP');
});

app.get('/logout', (req, res) => {
  req.session.username = undefined;
  res.send('DA_DANG_XUAT');
});

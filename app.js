let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

require('./app_api/models/db');

let apiRoutes = require('./app_api/routes/index'); 
let indexRouter = require('./app_server/routes/index');
let usersRouter = require('./app_server/routes/users');

//let index = require('./app_server/routes/index');

let app = express();
const session = require('express-session');

app.use(session({
  secret: 'change-me',
  resave: false,
  saveUninitialized: false
}));

// expose user to templates if you set req.session.user later
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./app_api/routes/index'));
// Handle server-side rendered routes
app.use('/', require('./app_server/routes/index'));
// Handle user-related routes
app.use('/users', require('./app_server/routes/users'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
const passport = require('passport');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const corsOptions = require('./config/cors');

const dotenv = require('dotenv');
dotenv.config();

var indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');

var app = express();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Express API for the backend',
    version: '1.0.0',
    description:
      'Esta es una aplicación de API REST hecha con Express. Recupera datos del backend.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html'
    },
    contact: {
      name: 'Ticket Bus API',
      url: 'undefined/api-docs',
      email: 'ticket-db@gmail.com'
    }
  },
  servers: [
    {
      url: process.env.API_HOST || 'http://localhost:3300',
      description: 'Development server'
    }
  ],
  basePath: '/'
};

// Swagger options
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './docs/swaggerDefinitions.js']
};

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// const auth = passport.authenticate('jwt', { session: false });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// CORS
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);

// Swagger specification
const specs = swaggerJsDoc(options);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(require('./docs/swaggerDefinitions'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

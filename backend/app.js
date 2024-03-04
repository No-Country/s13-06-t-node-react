const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const corsOptions = require('./config/cors');
const { getSwaggerSpec } = require('./config/swagger');

const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const vehiclesRouter = require('./routes/vehicle');
const routesRouter = require('./routes/route');
const schedulesRouter = require('./routes/schedules');
const terminalRouter = require('./routes/terminal');
const passengerRouter = require('./routes/passenger');
const cityRouter = require('./routes/city');
const amenitiesRouter = require('./routes/amenity');
const reservationRouter = require('./routes/reservation');
const ticketRouter = require('./routes/ticket');

const app = express();

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
app.use('/api/v1/vehicles', vehiclesRouter);
app.use('/api/v1/routes', routesRouter);
app.use('/api/v1/schedules', schedulesRouter);
app.use('/api/v1/cities', cityRouter);
app.use('/api/v1/terminals', terminalRouter);
app.use('/api/v1/passengers', passengerRouter);
app.use('/api/v1/amenities', amenitiesRouter);
app.use('/api/v1/reservations', reservationRouter);
app.use('/api/v1/tickets', ticketRouter);

// Swagger specification
const specs = getSwaggerSpec();

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
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

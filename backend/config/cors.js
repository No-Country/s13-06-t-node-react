const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'auth-token',
    'withcredentials',
    'Authorization',
    'authorization'
  ]
};

module.exports = corsOptions;

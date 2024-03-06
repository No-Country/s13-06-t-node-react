const {
  createPreferenceService,
  receiveWebHookService
} = require('../services/mercadopago');

const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

const createPreference = catchAsync(async (req, res) => {
  try {
    const orderObject = req.body;
    const preference = await createPreferenceService(orderObject);

    if (!preference) {
      throw new ErrorObject('No se pudo generar la orden de compra!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Orden de compra generada con éxito!',
      body: { preference }
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al generar la orden de compra!'
    });
  }
});

const receiveWebHook = catchAsync(async (req, res) => {
  const queryObject = req.query;
  console.log('from web-hook:', queryObject);
  if (queryObject && queryObject.type === 'payment') {
    try {
      const payment = await receiveWebHookService(queryObject);

      console.log(payment);

      if (!payment) {
        throw new ErrorObject(
          'No se pudo obtener la información del pago',
          500
        );
      }

      const { status } = payment;
      console.log('Transaction status: ', status);
      if (status === 'approved') {
        //SAVE IN TICKET DATABASE
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Información del pago recibida con éxito!',
        body: { payment }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al recibir la información del pago!'
      });
    }
  }
});

const paymentSuccess = catchAsync(async (req, res) => {
  try {
    endpointResponse({
      res,
      status: 'success',
      message: 'Pago realizado con éxito!',
      body: {}
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error en el servidor del pago!'
    });
  }
});

const paymentFailure = catchAsync(async (req, res) => {
  try {
    endpointResponse({
      res,
      status: 'error',
      message: 'Erorr al realizar el pago!',
      body: {}
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error en el servidor del pago!'
    });
  }
});

const paymentPending = catchAsync(async (req, res) => {
  try {
    endpointResponse({
      res,
      status: 'success',
      message: 'Pago en proceso!',
      body: {}
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error en el servidor del pago!'
    });
  }
});

module.exports = {
  createPreference,
  receiveWebHook,
  paymentSuccess,
  paymentPending,
  paymentFailure
};

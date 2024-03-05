const { createPreferenceService } = require('../services/mercadopago');

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

module.exports = {
  createPreference
};

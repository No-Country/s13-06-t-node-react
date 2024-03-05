const { MercadoPagoConfig, Preference } = require('mercadopago');

const createPreferenceService = async (orderObject) => {
  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.TEST_ACCESS_TOKEN
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title: orderObject.title,
            quantity: orderObject.quantity,
            unit_price: orderObject.unitPrice,
            currency_id: 'ARS',
            description: orderObject.description
          }
        ],
        payer: {
          email: orderObject.email
        },
        back_urls: {
          success: 'http://localhost:4000/success',
          failure: 'http://localhost:4000/error',
          pending: 'http://localhost:4000/webhook'
        }
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPreferenceService
};

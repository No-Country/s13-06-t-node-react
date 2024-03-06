const { MercadoPagoConfig, Preference, Payment } = require('mercadopago');

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
          success: 'http://localhost:3000/api/v1/mercadopago/success',
          failure: 'http://localhost:3000/api/v1/mercadopago/failure',
          pending: 'http://localhost:3000/api/v1/mercadopago/pending'
        },
        auto_return: 'approved',
        // RUTA GENERADA USANDO NGROK PARA USAR PROTOCOLO HTTPS, NECESARIO PARA CONEXION EN LOCAL.
        notification_url:
          'https://8a46-2803-1800-4006-70e2-492d-5e67-a21f-d4b3.ngrok-free.app/api/v1/mercadopago/web-hook'
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const receiveWebHookService = async (queryObject) => {
  // el hook recibe dos peticiones, una cuando se está efectuando la compra y otra cuando se aprueba.
  const webHookData = queryObject;

  if (webHookData && webHookData.type === 'payment') {
    try {
      const client = new MercadoPagoConfig({
        accessToken: process.env.TEST_ACCESS_TOKEN
      });
      const payment = new Payment(client);
      // recuperar información del pago
      const foundPayment = await payment.capture({
        id: webHookData['data.id']
      });
      return foundPayment;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  createPreferenceService,
  receiveWebHookService
};

const { Router } = require('express');
const {
  createPreference,
  receiveWebHook,
  paymentSuccess,
  paymentPending,
  paymentFailure
} = require('../controllers/mercadopago');

const router = Router();

router.post('/create-preference', createPreference);

router.post('/web-hook', receiveWebHook);

router.get('/success', paymentSuccess);

router.get('/failure', paymentFailure);

router.get('/pending', paymentPending);

module.exports = router;

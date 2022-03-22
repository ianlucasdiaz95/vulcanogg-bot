const { Router } = require('express');

const { webhookEn } = require('../controllers/webhook.controller');

const router = Router();

router.post('/en/update', webhookEn );


module.exports = router;
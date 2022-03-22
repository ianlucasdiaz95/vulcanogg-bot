const { Router } = require('express');

const { webhookEn } = require('../controllers/webhook.controller');

const router = Router();

router.post('/en/updates', webhookEn );


module.exports = router;
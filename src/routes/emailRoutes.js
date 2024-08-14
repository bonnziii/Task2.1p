const express = require('express');
const router = express.Router();
const { sendWelcomeEmail } = require('../controllers/emailController');

router.post('/subscribe', sendWelcomeEmail);

module.exports = router;

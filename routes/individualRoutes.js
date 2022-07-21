const express = require('express');
const controller = require('../controller/individualController');

const router = express.Router();

router.get('/', controller.appointment_index);
router.get('/search', controller.appointment_search_get);

module.exports = router;
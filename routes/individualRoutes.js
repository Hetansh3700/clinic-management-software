const express = require('express');
const controller = require('../controller/individualController');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', controller.appointment_index);
router.post('/search', urlencodedParser, controller.appointment_search_get);

module.exports = router;
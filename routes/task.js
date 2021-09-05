const express = require('express');
const router = express.Router();
const taskController = require('../controller/task');

router.post('/', taskController.create);

module.exports = router;
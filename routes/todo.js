const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');

router.post('/', todoController.create);
router.get('/', todoController.fetchList);
router.put('/', todoController.update);


module.exports = router;
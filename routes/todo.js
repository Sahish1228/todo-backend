const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');

router.post('/', todoController.create);
router.get('/', todoController.fetchList);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);
router.patch('/:id', todoController.completeStatus);
router.get('/:id', todoController.fetchTask);


module.exports = router;
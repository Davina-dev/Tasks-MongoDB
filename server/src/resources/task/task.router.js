const { Router } = require('express');

const taskController = require('./task.controller');

const router = Router();

router.post("/", taskController.createOne);

module.exports = router;

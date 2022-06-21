const { Router } = require('express');

const taskController = require('./task.controller');

const router = Router();
router.get("/", taskController.findMany);
router.post("/", taskController.createOne);


module.exports = router;

const { Router } = require('express');

const taskController = require('./task.controller');

const router = Router();
router.get("/", taskController.findMany);
router.post("/", taskController.createOne);
router.get("/:id", taskController.findOne)
router.put("/:id", taskController.updateOne);
router.delete("/:id", taskController.deleteOne);



module.exports = router;

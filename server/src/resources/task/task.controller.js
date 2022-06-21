const Task = require('./task.model')

const findMany = async (req, res) => {
  try {
    const docs = await Task.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal error' });
  }
}

const createOne = async (req, res) => {

  try {
    const newTask = req.body
    const doc = await Task.create(newTask)
    res.status(200).json({ result: [doc] })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: ' Creation Failed...' })
  }
}

module.exports = {
  findMany,
  createOne,
}

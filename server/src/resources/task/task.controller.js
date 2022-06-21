const Task = require('./task.model')

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
  createOne,
}

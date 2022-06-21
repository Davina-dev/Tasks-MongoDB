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

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot update" });
  }
}
const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Task.findOne({ _id: id });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot get Task" });
  }
}

module.exports = {
  findMany,
  createOne,
  findOne,
  updateOne,
}

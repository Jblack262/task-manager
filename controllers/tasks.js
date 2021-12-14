const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    // console.log('connection attempted');
    try {
        // console.log('connection success')
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    } catch (error) {
        // console.log('connection failed')
        res.status(500).json({msg:error})
    }
}

const createTask =  async (req, res) => {
    try {
    const tasks = await Task.create(req.body)
    res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id).exec();
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const newTask = req.body;
        const task = await Task.findOneAndUpdate({ _id: id }, newTask)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findOneAndDelete({ _id: id });
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports = {
    getAllTasks,
    updateTask,
    deleteTask,
    createTask,
    getTask
}
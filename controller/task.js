const Task = require("../models/task");

const taskController = {
  create: async (req, res) => {
    try {
        const { id, userId, taskName, taskDescription, priority, deadline, completeStatus} = req.body;
        let existingTask = await Task.findOne({id});
        if(existingTask){
            return res.status(400).send({
                message: "Task already exist",
                status: false,
            })
        }
const task = new Task({
    id,
    userId,
    taskName,
    taskDescription,
    priority,
    deadline,
    completeStatus,
});
const newTask = await task.save();
res.status(200).send({
    message: "Task created successfully",
    status: true,
    newTask,
});
    } catch (err) {
        console.log("Error: ", err);
        return res.status(400).send({
            message: "Something went wrong",
            status: false,
        })
    }
  },
  fetchTask: async (req, res  ) => {
    try{
      const { id } = req.params;
      let existingTask = await Task.findOne({id});
      if(existingTask){
          return res.status(200).send({
              status: true,
              data: existingTask,
          });
      }
      res.status(400).send({
          message: "Task does not exist",
          status: false,
      }) 

    }catch(err){
        console.log(err);
        res.status(400).send({
            message: "Something went wrong",
            status: false
        })
    }
  }
};
module.exports = taskController;

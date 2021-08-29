let todoList = [
    {
        id: "1",
        taskName: "first task",
        description: "description of first task",
        completedStatus: false,
        deadLine: "30/08/2021",
        priorty: "1"
    },
    {
        id: "2",
        taskName: "second task",
        description: "description of second task",
        completedStatus: false,
        deadLine: "03/09/2021",
        priorty: "2"
    }
];
 const todoController = {
     create: (req, res) => {
        const { body } = req;
        todoList.push(body);
        res.status(200).send({
            message: "Successfully Added",
            status: true,
        });
    },
    fetchList: (req, res ) => {
        res.send(todoList);
    },
    update: (req, res) => {
        // const { body } = req;
        // const { id } = req.params;
    //    todoList.forEach(element => {
    //        if(element.id == id){
    //            console.log("before update:", element);
    //            element ={...element, ...body};
    //            console.log("data to be updated:", body);
    //            console.log("updated data:", element);
    //        }            
    //     });
    console.log("hello from update controller");
        res.send({
            message: "Successfully updated",
            status: true,
        });
    }

 }

 module.exports = todoController;
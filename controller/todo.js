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
        const id = Math.ceil(Math.random()*Math.pow(10,5));
        const newTask= {
            id: id,
            ...body
        }
        todoList.push(newTask);
        res.status(200).send({
            message: "Successfully Added",
            status: true,
        });
    },

    update: (req, res) => {
        const { body } = req;
        const { id } = req.params;
        let i=0;
       todoList.forEach(element => {
           if(element.id == id){
               console.log("before update:", element);
               todoList[i] = {...element, ...body};
               console.log("data to be updated:", body);
               console.log("updated data:", element);
           }
           i++;            
        });
    // for(let i=0;i<todoList.length;i++){
    //     if(todoList[i].id === id){
    //         todoList[i] = {... todoList[i], ...body };
    //     }
    //}
    console.log("hello from update controller");
    console.log("updated list :", todoList);
        res.send({
            message: "Successfully updated",
            status: true,
            todoList,
        });
    },
    fetchTask: (req, res) =>{
        const { id } =req.params;
        let task = {};
        todoList.forEach(element => {
            if(element.id == id){
                task = element;
            }
        });
        res.send({
            status: true,
            data: task
        })
    },
    fetchList: (req, res ) => {
        res.send(todoList);
    },
    delete: (req, res ) => {
        const{ id } = req.params;
        let i=0;
        todoList.forEach(element =>{
            if(element.id == id){
                todoList.splice(i,1);
            }
            i++;
        })
        res.send({
            message: "Deleted Successfully",
            status: true,
        })
    },
    completeStatus: (req, res) =>{
        const{ id } =req.params;
        todoList.forEach(element => {
            if(element.id == id){
                element.completedStatus = !element.completedStatus;
            }
        })
        res.send({
            message: "Completed successfully",
            status: true
        })
    }

 }

 module.exports = todoController;
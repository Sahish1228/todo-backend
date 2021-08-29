const express = require('express');
const app = express();
const todoRoute = require('./routes/todo');
const bodyParser = require('body-parser');

// parsing the application 
app.use(bodyParser.json());


// middleware
const logger = (req, res, next) => {
    console.log("Logging the values");
    req.name = "Navneet";
    next();
}
app.use (logger);

app.use('/api/todo/', todoRoute);


app.get('*', (req, res ) => {
    res.status(400);
    console.log("Sorry this url doesn't exist");
    res.send("Sorry thus url does not exist");
})

app.listen (9000, () =>{
    console.log("Server is listening to port 9000");
});
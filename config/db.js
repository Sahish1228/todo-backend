const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongodbURI');

const connectDb = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log("MongoDb Connected ......");
    }catch(err){
        console.log("MongoDb  not Connected ......", err);
        process.exit(1);
    }
}

module.exports = connectDb; 
 
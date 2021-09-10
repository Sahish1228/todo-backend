const User = require("../models/user");
const bcrypt = require('bcryptjs');

const userController = {
  create: async (req, res) => {
    try {
      const { firstname, email, password, age, dob } = req.body;
      let existingUser = await User.findOne({ email });

      if (existingUser) {
        console.log("exisiting user already exists ", existingUser);
        return res.status(400).send({
          message: "User already exist",
          status: false,
        });
      }
     

       //password encryption

       const salt = await bcrypt.genSalt(10);
       const encryptPassword = await bcrypt.hash(password, salt);
      
      const user = new User({
        firstname,
        email,
        password:encryptPassword,
        age,
        dob,
      });


       const newUser = await user.save();
      res.status(200).send({
        message: "user added successfully",
        status: true,
        newUser,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        message: "User not added",
        status: false,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const { ObjectId } = req.body;
      console.log("id: " , ObjectId);
      if(!email || !password ){
        return res.status(400).send( {
          message: "Email or Password is invalid",
          status: false
        })
      }
      let existingUser = await User.findOne({email});
      if(existingUser){
        // if(password === existingUser.password){
        //   return res.status(200).send({
        //     message: "Login Successful",
        //     status: true
        //   })
        // }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(matchPassword){
          return res.status(200).send({
            message:"Login Successful",
            status: true
          })
        }
      }
      return res.status(400).send({
        message: "User does't  exist",
        status: true
      })
    } catch (err) {
      console.log("Login unsuccessful something went wrong", err);
      res.status(400).send({
        message:"Login unsuccessful something went wrong",
        status: false
      })
    }
  },

};
module.exports = userController;

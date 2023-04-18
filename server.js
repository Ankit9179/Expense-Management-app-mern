const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path')
const connectDb = require('./config/connectDb');

//config .env file
dotenv.config();


//connectDb call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes

//user route
app.use('/api/v1/users',require('./routes/userRoute'))

//transections route
app.use('/api/v1/transections',require('./routes/transectionRoutes'))




//read static file
app.use(express.static(path.join(__dirname,'./client/build')))

//get static file
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})





//port
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`SERVER is running on port ${PORT}`.bgBlack.white)
});

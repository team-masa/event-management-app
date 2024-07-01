import express from "express";
import mongoose from "mongoose";


//Connect to Database
await mongoose.connect(process.env.MONGO_URL);

//Create Express App
const app = express();

//Listen for incoming request
app.listen(8080,()=>{
    console.log('App is running on Port 8080');
});






//password: cJ1Mgfm1Q4EDUpa6
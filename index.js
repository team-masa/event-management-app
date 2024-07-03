import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import eventRouter from "./router/event.js";


//Connect to Database
await mongoose.connect(process.env.MONGO_URL);

//Create Express App
const app = express();

expressOasGenerator.handleResponses(app, {alwaysServeDocs: true,
    tags: ['event'],
mongooseModels: mongoose.modelNames(),
});
//Apply Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('flieruploads'));


//Using Routes
app.use(eventRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

//Listen for incoming request
app.listen(8080,()=>{
    console.log('App is running on Port 8080');
});






//password: cJ1Mgfm1Q4EDUpa6
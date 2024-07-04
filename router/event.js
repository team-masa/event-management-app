import { Router } from "express";
import { createEvent, updateEvent, deleteEvent, getEvent } from "../controller/event.js";
import { remoteUpload } from "../middleware/upload.js";

// Create Router
const eventRouter = Router();

// Define Router 
eventRouter.post('/events', remoteUpload.single('image'), createEvent);

eventRouter.patch('/events/:id', remoteUpload.single('image'), updateEvent);

eventRouter.delete('/events/:id', deleteEvent);

eventRouter.get('/events/', getEvent)

export default eventRouter;
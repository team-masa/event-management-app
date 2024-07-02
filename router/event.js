import { Router } from "express";
import { createEvent, updateEvent, deleteEvent } from "../controller/event";

// Create Router
const eventRouter = Router();

// Define Router 
eventRouter.post('/events', createEvent);

eventRouter.patch('/events/:id', updateEvent);

eventRouter.delete('/events/:id',deleteEvent);

export default eventRouter;
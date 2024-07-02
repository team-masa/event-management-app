import { EventModel } from "../models/event";

// Create Event
export const createEvent = async(req, res)=>{
    try {
        console.log('request', req.body);
        const addEventdata = await EventModel.create(req.body);
        res.status(200).json(addEventdata);
    } catch (error) {
        console.log(error)
    };
}

export const updateEvent = async(req, res, next)=>{
    try {
        const status = req.params.eventStatus;
        console.log(status);
        const updateEventdata = await EventModel.findByIdAndUpdate(req.params.id, {eventStatus: status});
        {
            res.status(200).json(updateEventdata);
        }
    } catch (error) {
        next(error)
    }
}

export const deleteEvent = async(req, res, next)=>{
    try {
        console.log('request', req.body);
        const deleteEventdata = await EventModel.findByIdAndDelete(req.params.id);
        {
            res.status(200).send(deleteEventdata);
        }
    } catch (error) {
        next(error)
    }
}
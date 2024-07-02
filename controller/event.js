import { EventModel } from "../models/event";

// Create Event
export const createEvent = async(req, res)=>{
    try {
        console.log('request', req.body);
        const addEventdata = await StatementModel.create(req.body);
        res.status(200).send(addEventdata);
    } catch (error) {
        console.log(error)
    };
}

export const updateEvent = async(req, res)=>{
    try {
        const status = req.params.eventStatus;
        console.log(status);
        const updateEventdata = await StatementModel.findByIdAndUpdate(req.params.id, {eventStatus: status});
        {
            res.status(200).json(updateEventdata);
        }
    } catch (error) {
        next(error)
    }
}

export const deleteEvent = async(req, res)=>{
    try {
        console.log('request', req.body);
        const deleteEventdata = await StatementModel.findByIdAndDelete(req.params.id);
        {
            res.status(200).json(`Event with id ${req.param.id} has been deleted`);
        }
    } catch (error) {
        next(error)
    }
}
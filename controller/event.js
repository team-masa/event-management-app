import { EventModel } from "../models/event.js";

// Create Event
export const createEvent = async (req, res, next) => {
    try {

        const addEventdata = await EventModel.create({
            ...req.body,
            image: req.file.filename
        });
        res.status(200).json(addEventdata);
    } catch (error) {
        next(error)
    };
}

export const updateEvent = async (req, res, next) => {
    try {
        const updateEventdata = await EventModel.findByIdAndUpdate(
            req.params.id,
            { ...req.body, image: req?.file?.filename},
            { new: true }
        );
        res.status(200).json(updateEventdata);
    } catch (error) {
        next(error)
    }
}

export const deleteEvent = async (req, res, next) => {
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

export const getEvents = async (req, res, next) => {
    try {
        // Get Query Params
        const { limit = 0, skip = 0, filter = "{}", sort = "{}", fields = "{}" } = req.query;
        // Get All Categories From database
        const getEvent = await EventModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(JSON.parse(limit)) //you can limit it to 10 or any number=>.limit(limit || 10)
            .skip(JSON.parse(skip))
            .sort(JSON.parse(sort))
        //Return response
        res.status(200).json(getEvent);
    } catch (error) {
        next(error);
    }
};

export const getEvent = async(req, res, next) => {
    try {
   const getOneEvent = await EventModel.findById();
   res.json(getOneEvent);
    } catch (error) {
        next(error);
    }
};
import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema ({
    name:{type: String, required: true},
    date:{type: Date, required: true},
    price:{type: Number, required: true},
    location:{type: String, required: true},
    flierUrl:{type: String}
});

eventSchema.plugin(toJSON);
export const EventModel = model('event', eventSchema);













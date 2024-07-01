import { Model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const loginSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

export const loginModel = model('login', loginSchema);














//Global plugin
mongoose.plugin(toJson)

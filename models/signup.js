import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const signUpSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String, required: true, unique: true}
}, {
timestamps: true
});

signUpSchema.plugin(toJSON);
export const SignUpModel = model('Sign Up', signUpSchema);

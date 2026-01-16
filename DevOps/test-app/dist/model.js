import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=model.js.map
import { models, model, Schema, Document } from "mongoose";

export interface IUserProfile extends Document {
  clerkId: string;
  name: string;
  username: string;
  email?: string;
  password?: string;
  picture?: string;
  mderea?: string;
  workplace?: string;
  department?: string;
  joinedAt: Date;
}
const UserProfileSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String },
  picture: { type: String },
  mderea: { type: String }, // المديرية - ثابته لكل محافظة
  workplace: { type: String }, // مكان العمل - الدائرة ثابته لكل يوزر
  department: { type: String }, // القسم - ثابت لكل محافظة
  joinedAt: { type: Date, default: Date.now },
});
const UserProfile =
  models.UserProfile || model("UserProfile", UserProfileSchema);

export default UserProfile;

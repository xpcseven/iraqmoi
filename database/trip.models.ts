import { models, model, Schema, Document } from "mongoose";
const TripSchema = new Schema({
  userid:    {type: Schema.Types.ObjectId, ref: "User" },
  contryname:{type: String}, // الدولة 
  tripdate:  {type: String}, //  تاريخ السفر
  tripreson: {type: String}, // السبب
  tripdays:  {type: String}, // مدة السفر
  formal:    {type: String}, // رسمية او لا
});
const Trip = models.Trip || model("Trip", TripSchema);
export default Trip;
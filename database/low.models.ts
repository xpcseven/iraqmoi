import { models, model, Schema, Document } from "mongoose";
const LowSchema = new Schema({
  userid:                {type: Schema.Types.ObjectId, ref: "User" },
  lownum:                {type: String}, //المادة القانونية
  judgmenttime:          {type: String}, // مدة الحكم
  judgmenttype:          {type: String}, // نوع الحكم
  courtname:             {type: String}, // اسم المحكمة
  judgmentnum:           {type: String}, // رقم القرار  
  judgmentdate:          {type: String}, // تاريخة

});
const Low = models.Low || model("Low", LowSchema);
export default Low;
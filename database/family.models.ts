import { models, model, Schema, Document } from "mongoose";
const FamilySchema = new Schema({
  userid:           {type: Schema.Types.ObjectId, ref: "User" },
  name:             {type: String}, //الاسم
  gender:           {type: String}, // الجنس
  allsefa:          {type: String}, // الصفة
  dateofbrith:      {type: String}, // تاريخ الميلاد
  brithplace:       {type: String}, // محل الولادة
  work:             {type: String}, //يعمل
  workplace:        {type: String}, // مكان العمل
  state:            {type: String}, // محافظة السكن
  address:          {type: String}, //العنوان
  nationality :     {type: String}, // الجنسية 
  othernationality: {type: String}, // الاخرى الجنسية 
});
const Family = models.Family || model("Family", FamilySchema);

export default Family;

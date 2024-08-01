import { models, model, Schema, Document } from "mongoose";

const UserSchema = new Schema({
  idnum: { type: String }, //الرقم الاحصائي
  rank: { type: String }, //الرتبة
  name: { type: String }, //الاسم
  familyname: { type: String }, //اللقب
  gender: { type: String }, //الجنس
  worktype: { type: String }, //صفة العمل
  mnsbnum: { type: String }, // الامر الاداري بالمنصب
  mnsbdate: { type: String }, // تاريخ الامر الاداري بالمنصب
  taeen: { type: String }, // امر التعيين
  taeendate: { type: String }, // تاريخ امر التعيين
  workplace: { type: String }, //الدائرة
  placeofbirth: { type: String }, //محل الولادة
  getinpolicedate: { type: String }, // تاريخ دخول المسلك
  nationality: {type: String}, // القومية

  dateofbirth: { type: String }, //تاريخ الميلاد
  phonenumber: { type: String }, //رقم الهاتف
  joptitle: { type: String }, // العنوان الوظيفي
  mderea: { type: String }, // المديرية
  department: { type: String }, // القسم
  jopid: { type: String }, // الرقم الوظيفي
  healthnum: { type: String }, // رقم الضمان الصحي
  guntype: { type: String }, // نوع السلاح
  gunnum: { type: String }, // رقم السلاح
  lastworkhome: { type: String }, // مكان العمل السابق
  civilcoll: { type: String }, // الجامعة المدنية
  militarycoll: { type: String }, // الكلية العسكرية
  dowra: { type: String }, // الدورة
  dowradate: { type: String }, // تاريخ التخرج
  wkala: { type: String }, // الوكالة
  arkan: { type: String }, //كلية الاركان
  jopdigree: { type: String }, // الدرجة الوظيفية
  low: [{ type: Schema.Types.ObjectId, ref: "Low" }],
  trip: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
  // البيانات الاجتماعية
  family: [{ type: Schema.Types.ObjectId, ref: "Family" }], // Family database relation with user
  mothername: { type: String }, // اسم الام
  maritalstatus: { type: String }, // الحال الاجتماعية
  kidsnum: { type: String }, // عدد الاطفال
  bloodgroup: { type: String }, // فصيلة الدم
  nationalnum: { type: String }, // الرقم الوطني
  cardnum: { type: String }, // رقم الهوية
  recordnum: { type: String }, // رقم السجل
  pagenum: { type: String }, // رقم الصحيفة


  //  معلومات السكن

  state: { type: String }, // محافظة السكن
  address: { type: String }, //العنوان
  mktb: { type: String }, // مكتب المعلومات
  mktarname: { type: String }, // اسم المختار
  cardidnum: { type: String }, // رقم الاستمارة
  nearableplace: { type: String }, // نقطة دالة
  dateoff: { type: String }, // تاريخ التنظيم
  ma: { type: String }, // محلة
  zu: { type: String }, // زقاق
  da: { type: String }, // دار
  
  academic: { type: String }, //التحصيل الدراسي
  retire: { type: String }, // متقاعد
  reson: { type: String }, // الاسباب
  passportnum: { type: String }, //رقم الجواز
  passporttype: { type: String }, //نوع الجواز
  passportdate: { type: String }, // تاريخ الاصدار
  passportexpired: { type: String }, // تاريخ النفاذ

  joinAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;

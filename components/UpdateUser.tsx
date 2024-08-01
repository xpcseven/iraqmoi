"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateUser } from "@/lib/action/user.action";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@mui/material";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const formSchema = z.object({
  idnum: z.string().optional(),
  gender: z.string().optional(),
  rank: z.string().optional(),
  name: z.string().optional(),
  familyname: z.string().optional(),
  worktype: z.string().optional(),
  workplace: z.string().optional(),
  placeofbirth: z.string().optional(),
  state: z.string().optional(),
  address: z.string().optional(),
  dateofbirth: z.string().optional(),
  maritalstatus: z.string().optional(),
  phonenumber: z.string().optional(),
  joptitle: z.string().optional(),
  mderea: z.string().optional(),
  wkala: z.string().optional(),
  department: z.string().optional(),
  jopid: z.string().optional(),
  healthnum: z.string().optional(),
  guntype: z.string().optional(),
  gunnum: z.string().optional(),
  lastworkhome: z.string().optional(),
  civilcoll: z.string().optional(),
  militarycoll: z.string().optional(),
  dowra: z.string().optional(),
  mothername: z.string().optional(),
  kidsnum: z.string().optional(),
  bloodgroup: z.string().optional(),
  nationalnum: z.string().optional(),
  cardnum: z.string().optional(),
  recordnum: z.string().optional(),
  pagenum: z.string().optional(),
  dowradate: z.string().optional(),
  //  معلومات السكن
  mktb: z.string().optional(),
  mktarname: z.string().optional(),
  cardidnum: z.string().optional(),
  nearableplace: z.string().optional(),
  dateoff: z.string().optional(),
  ma: z.string().optional(),
  zu: z.string().optional(),
  da: z.string().optional(),
  academic: z.string().optional(),
  arkan: z.string().optional(),
  retire: z.string().optional(),
  reson: z.string().optional(),
  passportnum: z.string().optional(),
  passporttype: z.string().optional(),
  passportdate: z.string().optional(),
  passportexpired: z.string().optional(),
  mnsbnum: z.string().optional(),
  mnsbdate: z.string().optional(),
  taeen: z.string().optional(),
  taeendate: z.string().optional(),
  getinpolicedate: z.string().optional(),
  jopdigree: z.string().optional(),
  family: z.array(z.string()).optional(),
  nationality : z.string().optional(),
});

const UpdateUser = (userInfo: any) => {
  const router = useRouter();
  //  const parsUser = JSON.parse(userInfo)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      idnum: userInfo?.userInfo?.idnum || "",
      gender: userInfo?.userInfo?.gender || "",
      name: userInfo?.userInfo?.name || "",
      rank: userInfo?.userInfo?.rank || "",
      familyname: userInfo?.userInfo?.familyname || "",
      worktype: userInfo?.userInfo?.worktype || "",
      workplace: userInfo?.userInfo?.workplace || "",
      placeofbirth: userInfo?.userInfo?.placeofbirth || "",
      state: userInfo?.userInfo?.state || "",
      address: userInfo?.userInfo?.address || "",
      dateofbirth: userInfo?.userInfo?.dateofbirth || "",
      maritalstatus: userInfo?.userInfo?.maritalstatus || "",
      phonenumber: userInfo?.userInfo?.phonenumber || "",
      joptitle: userInfo?.userInfo?.joptitle || "",
      mderea: userInfo?.userInfo?.mderea || "",
      wkala: userInfo?.userInfo?.wkala || "",
      department: userInfo?.userInfo?.department || "",
      jopid: userInfo?.userInfo?.jopid || "",
      healthnum: userInfo?.userInfo?.healthnum || "",
      guntype: userInfo?.userInfo?.guntype || "",
      gunnum: userInfo?.userInfo?.gunnum || "",
      lastworkhome: userInfo?.userInfo?.lastworkhome || "",
      civilcoll: userInfo?.userInfo?.civilcoll || "",
      militarycoll: userInfo?.userInfo?.militarycoll || "",
      dowra: userInfo?.userInfo?.dowra || "",
      mothername: userInfo?.userInfo?.mothername || "",
      kidsnum: userInfo?.userInfo?.kidsnum || "",
      bloodgroup: userInfo?.userInfo?.bloodgroup || "",
      nationalnum: userInfo?.userInfo?.nationalnum || "",
      cardnum: userInfo?.userInfo?.cardnum || "",
      recordnum: userInfo?.userInfo?.recordnum || "",
      pagenum: userInfo?.userInfo?.pagenum || "",
      mktb: userInfo?.userInfo?.mktb || "",
      mktarname: userInfo?.userInfo?.mktarname || "",
      cardidnum: userInfo?.userInfo?.cardidnum || "",
      nearableplace: userInfo?.userInfo?.nearableplace || "",
      dateoff: userInfo?.userInfo?.dateoff || "",
      ma: userInfo?.userInfo?.ma || "",
      zu: userInfo?.userInfo?.zu || "",
      da: userInfo?.userInfo?.da || "",
      academic: userInfo?.userInfo?.academic || "",
      dowradate: userInfo?.userInfo?.dowradate || "",
      arkan: userInfo?.userInfo?.arkan || "",
      retire: userInfo?.userInfo?.retire || "",
      reson: userInfo?.userInfo?.reson || "",
      passportnum: userInfo?.userInfo?.passportnum || "",
      passporttype: userInfo?.userInfo?.passporttype || "",
      passportdate: userInfo?.userInfo?.passportdate || "",
      passportexpired: userInfo?.userInfo?.passportexpired || "",
      mnsbnum: userInfo?.userInfo.mnsbnum || "",
      mnsbdate: userInfo?.userInfo.mnsbdate || "",
      taeen: userInfo?.userInfo.taeen || "",
      taeendate: userInfo?.userInfo.taeendate || "",
      getinpolicedate: userInfo?.userInfo.getinpolicedate || "",
      jopdigree: userInfo?.userInfo.jopdigree || "",
      nationality: userInfo?.userInfo.nationality|| "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateUser({
        _id: userInfo.userInfo._id,
        userData: {
          name: values.name,
          familyname: values.familyname,
          rank: values.rank,
          idnum: values.idnum,
          academic: values.academic,
          gender: values.gender,
          phonenumber: values.phonenumber,
          dateofbirth: values.dateofbirth,
          worktype: values.worktype,
          joptitle: values.joptitle,
          placeofbirth: values.placeofbirth,
          mderea: values.mderea,
          wkala: values.wkala,
          department: values.department,
          workplace: values.workplace,
          jopid: values.jopid,
          healthnum: values.healthnum,
          guntype: values.guntype,
          gunnum: values.gunnum,
          lastworkhome: values.lastworkhome,
          civilcoll: values.civilcoll,
          militarycoll: values.militarycoll,
          dowra: values.dowra,
          mothername: values.mothername,
          maritalstatus: values.maritalstatus,
          kidsnum: values.kidsnum,
          bloodgroup: values.bloodgroup,
          nationalnum: values.nationalnum,
          cardnum: values.cardnum,
          recordnum: values.recordnum,
          pagenum: values.pagenum,
          state: values.state,
          mktb: values.mktb,
          mktarname: values.mktarname,
          cardidnum: values.cardidnum,
          nearableplace: values.nearableplace,
          dateoff: values.dateoff,
          ma: values.ma,
          zu: values.zu,
          da: values.da,
          dowradate: values.dowradate,
          arkan: values.arkan,
          retire: values.retire,
          reson: values.reson,
          passportnum: values.passportnum,
          passporttype: values.passporttype,
          passportdate: values.passportdate,
          passportexpired: values.passportexpired,
          mnsbnum: values.mnsbnum,
          mnsbdate: values.mnsbdate,
          taeen: values.taeen,
          taeendate: values.taeendate,
          getinpolicedate: values.getinpolicedate,
          jopdigree: values.jopdigree,
          nationality: values.nationality,
        },
        path: "/userview",
      });

      router.push("/userview");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "حدث خطأ !",
        text: "لم يتم تحديث البيانات !",
        icon: "error",
      });
    }
    console.log(values);
  }

  const frameworks = [
    {
      value: "مقر المديرية",
      label: "مقر المديرية",
    },
    {
      value: "1080 بعقوبة",
      label: "1080 بعقوبة",
    },
    {
      value: "1081 كنعان",
      label: "1081 كنعان",
    },
    {
      value: "1082 بني سعد",
      label: "1082 بني سعد",
    },
    {
      value: "1083 المعبر",
      label: "1083 المعبر",
    },
    {
      value: "1084 اشنونا",
      label: "1084 اشنونا",
    },
    {
      value: "1085 المقدادية",
      label: "1085 المقدادية",
    },
    {
      value: "1086 ابي صيدا",
      label: "1086 ابي صيدا",
    },
    {
      value: "1087 الوجيهية",
      label: "1087 الوجيهية",
    },
    {
      value: "1088 الخالص",
      label: "1088 الخالص",
    },
    {
      value: "1089 هبهب",
      label: "1089 هبهب",
    },
    {
      value: "1090 المنصورية",
      label: "1090 المنصورية",
    },
    {
      value: "1091 السد العظيم",
      label: "1091 السد العظيم",
    },
    {
      value: "1092 السلام",
      label: "1092 السلام",
    },
    {
      value: "1093 خانقين",
      label: "1093 خانقين",
    },
    {
      value: "1094 السعدية",
      label: "1094 السعدية",
    },
    {
      value: "1095 جلولاء",
      label: "1095 جلولاء",
    },
    {
      value: "1096 كفري",
      label: "1096 كفري",
    },
    {
      value: "1097 قرطبة",
      label: "1097 قرطبة",
    },
    {
      value: "1098 جبارة",
      label: "1098 جبارة",
    },
    {
      value: "1099 بلدروز",
      label: "1099 بلدروز",
    },
    {
      value: "1100 مندلي",
      label: "1100 مندلي",
    },
    {
      value: "1101 قزانية",
      label: "1101 قزانية",
    },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <div className="overflow-hidden ">
      <Link href="/userview">UsersTable</Link>

      <div className="h-full">
        <div className="h-full relative">
          {/* <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://i.ibb.co/dmv26YZ/Untitled-design.png" /> */}
          <div className=" h-full">
            <div className="text-center font-cairo text-colorone relative">
              <div className=" text-center">
                <div className="flex justify-center">
                  <img
                    className="size-32"
                    src="https://i.ibb.co/bBnjBqR/584px-MOI.png"
                  />
                </div>
                <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mt-4">
                  مرحبا بك
                </h1>
              </div>

              <div className="mt-10 mr-2 ml-2 pb-2 text-center  p-5">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-row-3"
                  >
                    {/* البيانات الشخصية */}
                    <h1 className="mt-4 mb-2 text-right border-b-2 border-red-200 font-bold text-sky-800">
                      البيانات الشخصية
                    </h1>
                    <div className="  grid xl:grid-cols-5 xl:grid-row-4 lg:grid-cols-4 lg:grid-row-3 md:grid-cols-3 md:grid-row-2 sm:grid-cols-2 sm:grid-row-3 xs:grid-cols-1">
                      <FormField
                        control={form.control}
                        name="idnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className=" text-colorone text-right">
                              الرقم الاحصائي
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 h-7 w-52 m-4 text-center"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rank"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الرتبة
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="فريق اول">فريق اول</option>
                                <option value="فريق">فريق</option>
                                <option value="لواء">لواء</option>
                                <option value="عميد">عميد</option>
                                <option value="عقيد">عقيد</option>
                                <option value="مقدم">مقدم</option>
                                <option value="رائد">رائد</option>
                                <option value="نقيب">نقيب</option>
                                <option value="ملازم اول">ملازم اول</option>
                                <option value="ملازم ثاني">ملازم ثاني</option>
                                <option value="مفوض">مفوض</option>
                                <option value="رئيس عرفاء">رئيس عرفاء</option>
                                <option value="عريف">عريف</option>
                                <option value="نائب عريف">نائب عريف</option>
                                <option value="شرطي اول">شرطي اول</option>
                                <option value="شرطي">شرطي</option>
                                <option value="موظف مدني">موظف مدني</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="joptitle"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              العنوان الوظيفي
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="jopdigree"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الدرجة الوظيفية
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الاسم
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="familyname"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              اللقب
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"
                                placeholder="Email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الجنس
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="ذكر">ذكر</option>
                                <option value="انثى">انثى</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="placeofbirth"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              محل الولادة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              محافظة السكن
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="بغداد">بغداد</option>
                                <option value="ديالى">ديالى</option>
                                <option value="الانبار">الانبار</option>
                                <option value="صلاح الدين">صلاح الدين</option>
                                <option value="كربلاء">كربلاء</option>
                                <option value="النجف">النجف</option>
                                <option value="بابل">بابل</option>
                                <option value="واسط">واسط</option>
                                <option value="البصرة">البصرة </option>
                                <option value="ميسان">ميسان</option>
                                <option value="المثنى">المثنى</option>
                                <option value="ذي قار">ذي قار</option>
                                <option value="الديوانية">الديوانية</option>
                                <option value="كركوك">كركوك</option>
                                <option value="سليمانية">سليمانية</option>
                                <option value="اربيل">اربيل</option>
                                <option value="نينوى">نينوى</option>
                                <option value="دهوك">دهوك</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dateofbirth"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ الميلاد
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                type="Date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phonenumber"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم الهاتف
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="academic"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              التحصيل الدراسي
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="دكتوراه">دكتوراه</option>
                                <option value="ماجستير">ماجستير</option>
                                <option value="بكالوريوس">بكالوريوس</option>
                                <option value="دبلوم عالي">دبلوم عالي</option>
                                <option value="دبلوم">دبلوم</option>
                                <option value="علوم امنية">علوم امنية</option>
                                <option value="اعدادية">اعدادية</option>
                                <option value="متوسطة">متوسطة</option>
                                <option value="ابتدائية">ابتدائية</option>
                                <option value="يقرأ و يكتب">يقرأ و يكتب</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="civilcoll"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الجامعة المدنية
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bloodgroup"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              فصيلة الدم
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="O+">O+</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="B-">B-</option>
                                <option value="A-">A-</option>
                                <option value="O-">O-</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

<FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                          القومية
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="عربي">عربي</option>
                                <option value="كردي">كردي</option>
                                <option value="تركماني">تركماني</option>

                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* البيانات الشخصية */}

                    {/* بيانات الوظيفية */}
                    <h1 className="mt-4 mb-2 text-right border-b-2 border-red-200 font-bold text-sky-800">
                      البيانات الوظيفية
                    </h1>
                    <div className=" grid xl:grid-cols-5 xl:grid-row-4 lg:grid-cols-4 lg:grid-row-3 md:grid-cols-3 md:grid-row-2 sm:grid-cols-2 sm:grid-row-3 xs:grid-cols-1">
                      <FormField
                        control={form.control}
                        name="worktype"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              صفة العمل
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="مدير عام">مدير عام</option>
                                <option value="وكيل مدير عام">
                                  وكيل مدير عام
                                </option>
                                <option value="مدير محافظة">مدير محافظة</option>
                                <option value="وكيل مدير محافظة">
                                  وكيل مدير محافظة
                                </option>
                                <option value="مدير قسم">مدير قسم</option>
                                <option value="وكيل مدير قسم">
                                  وكيل مدير قسم
                                </option>
                                <option value="مدير دائرة">مدير دائرة</option>
                                <option value="وكيل مدير الدائرة">
                                  وكيل مدير الدائرة
                                </option>
                                <option value="مدير شعبة">مدير شعبة</option>
                                <option value="مدير وحدة">مدير وحدة</option>
                                <option value="مدير ادارة">مدير ادارة</option>
                                <option value="مصرح">مصرح</option>
                                <option value="مدقق">مدقق</option>
                                <option value="محاسب">محاسب</option>
                                <option value="امين صندوق">امين صندوق</option>
                                <option value="مشرف ادخال">مشرف ادخال</option>
                                <option value="مدخل بيانات">
                                  مدخل بيانات
                                </option>
                                <option value="المحطة المحمولة">المحطة المحمولة</option>
                                <option value="تسليم">تسليم</option>
                                <option value="قيد ورقي/الكتروني">
                                  قيد ورقي/الكتروني
                                </option>
                                <option value="ممثل قانوني">ممثل قانوني</option>
                                <option value="دعم فني">دعم فني</option>
                                <option value="اتصالات">اتصالات</option>
                                <option value="ادارة">موظف ادارة</option>
                                <option value="موظف تكت">موظف تكت</option>
                                <option value="حرس">حرس</option>
                                <option value="صيانة">موظف صيانة</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="mnsbnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الامر الاداري بالمنصب
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="mnsbdate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ الامر الاداري بالمنصب
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="workplace"
                        render={({ field }) => (
                          <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[200px] justify-between text-black rounded-none bg-gray-200 mr-5 h-8 mt-5"
                              >
                                {field.value
                                  ? frameworks.find(
                                      (framework) =>
                                        framework.value === field.value
                                    )?.label
                                  : "اختر الدائرة"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0 font-cairo text-black">
                              <Command className="bg-gray-400 ">
                                <CommandInput
                                  className="text-black font-cairo"
                                  placeholder="Search framework..."
                                />
                                <CommandList>
                                  <CommandEmpty className="">
                                    اكتب الاسم او الرمز بشكل صحيح
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {frameworks.map((framework) => (
                                      <CommandItem
                                        className="hover:bg-slate-500 hover:text-white"
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                          field.onChange(
                                            currentValue === field.value
                                              ? ""
                                              : currentValue
                                          );
                                          setOpen(false);
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            field.value === framework.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {framework.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="wkala"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الوكالة
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="مكتب الوزير">مكتب الوزير</option>
                                <option value="الشؤون الادارية و المالية">
                                  الشؤون الادارية و المالية
                                </option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="mderea"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              المديرية
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="الاحوال المدنية و الجوازات و الاقامة/بغداد">
                                  الاحوال المدنية و الجوازات و الاقامة/بغداد
                                </option>
                                <option value="الاحوال المدنية و الجوازات و الاقامة/ديالى">
                                  الاحوال المدنية و الجوازات و الاقامة/ديالى
                                </option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              القسم
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="البطاقة الوطنية">
                                  البطاقة الوطنية
                                </option>
                                <option value="الجوازات">الجوازات</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="jopid"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الرقم الوظيفي
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="healthnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم الضمان الصحي
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="guntype"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              نوع السلاح
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gunnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم السلاح
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastworkhome"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              العمل السابق
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="militarycoll"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الكلية او المعهد العسكري
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="كلية الشرطة">كلية الشرطة</option>
                                <option value="المعهد العالي للتطوير الامني و الاداري">
                                  المعهد العالي للتطوير الامني و الاداري
                                </option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dowra"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الدورة العسكرية
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dowradate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ التخرج
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                type="Date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="arkan"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              ضابط ركن ؟
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="نعم">نعم</option>
                                <option value="كلا">كلا</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="retire"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              مستمر بالخدمة ؟
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="مستمر بالخدمة">
                                  مستمر بالخدمة
                                </option>
                                <option value="متقاعد">متقاعد</option>
                                <option value="منقطع عن الخدمة ؟">
                                  منقطع عن الخدمة ؟
                                </option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reson"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              السبب
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="taeen"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              امر التعيين
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="taeendate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ امر التعيين
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="getinpolicedate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ دخول المسلك{" "}
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* بيانات الوظيفية */}

                    {/* البيانات الاجتماعية */}
                    <h1 className="mt-4 mb-2 text-right border-b-2 border-red-200 font-bold text-sky-800">
                      البيانات الاجتماعية
                    </h1>
                    <div className=" rounded-tr-3xl rounded-bl-3xl grid xl:grid-cols-5 xl:grid-row-4 lg:grid-cols-4 lg:grid-row-3 md:grid-cols-3 md:grid-row-2 sm:grid-cols-2 sm:grid-row-3 xs:grid-cols-1 ">
                      <FormField
                        control={form.control}
                        name="mothername"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              اسم الام
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="maritalstatus"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الحالة الاجتماعية
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="اعزب">اعزب</option>
                                <option value="متزوج \ متزوجة">
                                  متزوج \ متزوجة
                                </option>
                                <option value="مطلق \ مطلقة">
                                  مطلق \ مطلقة
                                </option>
                                <option value="ارمل \ ارملة">
                                  ارمل \ ارملة
                                </option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="kidsnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              عدد الاطفال
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* البيانات الاجتماعية */}

                    {/* البيانات المدنية */}
                    <h1 className="mt-4 mb-2 text-right border-b-2 border-red-200 font-bold text-sky-800">
                      بيانات الهوية و معلومات السكن
                    </h1>
                    <div className=" rounded-tr-3xl rounded-bl-3xl grid xl:grid-cols-5 xl:grid-row-4 lg:grid-cols-4 lg:grid-row-3 md:grid-cols-3 md:grid-row-2 sm:grid-cols-2 sm:grid-row-3 xs:grid-cols-1">
                      <FormField
                        control={form.control}
                        name="nationalnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الرقم الوطني
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم الهوية
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="recordnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم السجل
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pagenum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم الصحيفة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passportnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم الجواز
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                placeholder="لايوجد || في حال لا تملك"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passporttype"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              نوع الجواز
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="لا يوجد">لا يوجد</option>
                                <option value="A">A</option>
                                <option value="P">P</option>
                                <option value="S">S</option>
                                <option value="H">H</option>
                                <option value="G">G</option>
                                <option value="دبلوماسي">دبلوماسي</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passportdate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ اصدار الجواز
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                type="Date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passportexpired"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ النفاذ للجواز
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                type="Date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              العنوان
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mktb"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              مكتب معلومات
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mktarname"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              اسم المختار
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardidnum"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              رقم الاستمارة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nearableplace"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              نقطة دالة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dateoff"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ التنظيم
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                type="Date"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ma"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              محلة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zu"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              زقاق
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="da"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              دار
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 w-52 h- m-4 text-center font-cairo"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* البيانات المدنية */}

                    <div>
                      <Button
                        type="submit"
                        className="border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-36 h-11 text-white bg-sky-800 hover:bg-sky-700 mr-6 m-3"
                      >
                        حفظ التعديل
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateUser;

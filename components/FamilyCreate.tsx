"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@mui/material";
import Swal from "sweetalert2";
import { createFamily } from "@/lib/action/family.action";
const formSchema = z.object({
  name: z.string().optional(),
  gender: z.string().optional(),
  allsefa: z.string().optional(),
  dateofbrith: z.string().optional(),
  work: z.string().optional(),
  workplace: z.string().optional(),
  state: z.string().optional(),
  address: z.string().optional(),
  nationality: z.string().optional(),
  othernationality: z.string().optional(),
  brithplace: z.string().optional(),
});

const FamilyCreate = ({ userid }: any) => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "",
      allsefa: "",
      dateofbrith: "",
      work: "",
      workplace: "",
      state: "",
      address: "",
      nationality: "",
      othernationality: "",
      brithplace: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    // Do something with the form values.
    // This will be type-safe and validated.
    try {
      await createFamily({
        name: values.name,
        gender: values.gender,
        allsefa: values.allsefa,
        dateofbrith: values.dateofbrith,
        work: values.work,
        workplace: values.workplace,
        state: values.state,
        address: values.address,
        nationality: values.nationality,
        othernationality: values.othernationality,
        brithplace: values.brithplace,
        
        userid: userid,
        path: pathname,
      });
      router.push("/userview");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      router.push("/userview");
    }
    console.log(values);
  }

  return (
    <div className="flex justify-center mt-14" >
      <div>

        <h1 className=" mb-7 font-cairo font-bold text-sky-800 text-2xl text-center">بيانات العائلة</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2"
        >
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
                    placeholder="name"
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
                    className="bg-gray-200 w-52 m-4 text-center font-cairo"{...field}>
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
                        name="allsefa"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              الصفة
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="زوجة">زوجة</option>
                                <option value="ابن">ابن</option>
                                <option value="ابنة">ابنة</option>
                                <option value="اخ">اخ</option>
                                <option value="اخت">اخت</option>
                                <option value="عم/ـة">عم/ـة</option>
                                <option value="خال/ـة">خال/ـة</option>
                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

          
          <FormField
            control={form.control}
            name="dateofbrith"
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
            name="brithplace"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  محل الولادة
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"
                    placeholder="محل / الولادة"
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
                        name="work"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              يعمل
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="ضابط شرطة">ضابط شرطة</option>
                                <option value="ضابط جيش">ضابط جيش</option>
                                <option value="دكتور/ـة">دكتور/ـة</option>
                                <option value="ممرض/ـة">ممرض/ـة</option>
                                <option value="موظف/موظفة">موظف/موظفة</option>
                                <option value="متقاعد">متقاعد</option>
                                <option value="كاسب">كاسب</option>
                                <option value="ربة بيت">ربة بيت</option>
                                <option value="طالب/ـة">طالب/ـة</option>
                                <option value="تلميذ/ـة">تلميذ/ـة</option>
                                <option value="طفل">طفل</option>
                                
                              </select>
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
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              مكان العمل
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"{...field}
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
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"{...field}>
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
            name="nationality"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  الجنسية
                </FormLabel>
                <FormControl>
                  <select
                    className="bg-gray-200 w-52 m-4 text-center font-cairo"
                    {...field}
                  >
                    <option value=""></option>
                    <option value="عراقي">عراقي</option>
                    <option value="جنسية اخرى">جنسية اخرى</option>
                  </select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
                        control={form.control}
                        name="othernationality"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                            جنسية اخرى
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




          <button
            type="submit"
            className="border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-36 h-11 text-white bg-sky-800 hover:bg-sky-700 mt-3"
          >
            اضافة
          </button>
        </form>
      </Form>
      </div>
      <img src="https://i.ibb.co/WpzCmFZ/Fam.png" className="size-96" />
    </div>
  );
};

export default FamilyCreate;

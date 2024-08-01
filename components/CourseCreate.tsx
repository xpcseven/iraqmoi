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
import { createLow } from "@/lib/action/low.action";
import { createCourse } from "@/lib/action/course.action";

const formSchema = z.object({
    coursename: z.string().optional(),
    courseplace: z.string().optional(),
    coursestate: z.string().optional(),
    coursetime: z.string().optional(),

});
const CourseCreate = ({ userid }: any) => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        coursename: "",
        courseplace: "",
        coursestate: "",
        coursetime: "",

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
      await createCourse({
        coursename: values.coursename,
        courseplace: values.courseplace,
        coursestate: values.coursestate,
        coursetime: values.coursetime,


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
  }

  return (
    <div className="flex justify-center mt-14" >
      <div>

        <h1 className=" mb-7 font-cairo font-bold text-sky-800 text-2xl text-center">الاحكام و المجالس التحقيقية</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2"
        >
          <FormField
            control={form.control}
            name="coursename"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
           عنوان الدورة
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
            name="courseplace"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
الجهة المقيمة للدورة
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
                        name="coursestate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                           مكان اقامة الدورة
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
            name="coursetime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                مدة الدورة
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
      <img src="https://i.ibb.co/SwSQRmL/507313.png" className="size-96 rounded-full" />
    </div>
  );
};

export default CourseCreate;

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
import {createTrip} from "@/lib/action/trip.action";
const formSchema = z.object({
  contryname: z.string().optional(),
  tripdate: z.string().optional(),
  tripreson: z.string().optional(),
  tripdays: z.string().optional(),
  formal: z.string().optional(),
});

const TripCreate = ({ userid }: any) => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contryname: "",
      tripdate: "",
      tripreson: "",
      tripdays: "",
      formal: "",
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
      await createTrip({
        contryname: values.contryname,
        tripdate: values.tripdate,
        tripreson: values.tripreson,
        tripdays: values.tripdays,
        formal: values.formal,

        
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
    <div  className="mt-14">

      <div>
        <div className="flex justify-center">

      <img src="https://i.ibb.co/WfBqHDL/airport.png" className="w-fit absolute opacity-30" />
        </div>
        <h1 className=" mb-7 font-cairo font-bold text-sky-800 text-2xl text-center">السفر خارج العراق</h1>
<div className="relative flex justify-center">

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2"
        >
          <FormField
            control={form.control}
            name="contryname"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  الدولة
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
            name="tripdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  تاريخ السفر
                </FormLabel>
                <FormControl>
                <Input
                    className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"
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
                        name="tripreson"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              سبب السفر
                            </FormLabel>
                            <FormControl>
                              <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="سياحة">سياحة</option>
                                <option value="حج / عمرة">حج / عمرة</option>
                                <option value="زيارة العتبات المقدسة">زيارة العتبات المقدسة</option>
                                <option value="علاج">علاج</option>
                                <option value="مرافقة مريض">مرافقة مريض</option>

                              </select>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

          
          <FormField
            control={form.control}
            name="tripdays"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                 مدة الاجازة
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
            name="formal"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                تصريح بالسفر
                </FormLabel>
                <FormControl>
                <select
                                className="bg-gray-200 w-52 m-4 text-center font-cairo"
                                {...field}
                              >
                                <option value=""></option>
                                <option value="رسمية">رسمية</option>
                                <option value="غير رسمية">غير رسمية</option>
                                </select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />



          <button
            type="submit"
            className="border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-36 h-11 text-white bg-sky-800 hover:bg-sky-700 mt-3 "
          >
            اضافة
          </button>
        </form>
      </Form>
</div>
      </div>
      {/* <img src="https://i.ibb.co/WfBqHDL/airport.png" className="size-80 w-fit" /> */}
    </div>
  );
};

export default TripCreate ;

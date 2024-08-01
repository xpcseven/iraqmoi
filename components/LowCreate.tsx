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
const formSchema = z.object({
  lownum: z.string().optional(),
  judgmenttime: z.string().optional(),
  judgmenttype: z.string().optional(),
  courtname: z.string().optional(),
  judgmentnum: z.string().optional(),
  judgmentdate: z.string().optional(),
});
const LowCreate = ({ userid }: any) => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lownum: "",
      judgmenttime: "",
      judgmenttype: "",
      courtname: "",
      judgmentnum: "",
      judgmentdate: "",

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
      await createLow({
        lownum: values.lownum,
        judgmenttime: values.judgmenttime,
        judgmenttype: values.judgmenttype,
        courtname: values.courtname,
        judgmentnum: values.judgmentnum,
        judgmentdate: values.judgmentdate,

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
            name="lownum"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  المادة القانونية
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"
                    placeholder="000 من قانون أ ب جـ"
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
            name="judgmenttime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  مدة الحكم
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
                        name="judgmenttype"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              نوع الحكم
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
            name="courtname"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                  اسم المحكمة
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
            name="judgmentnum"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-colorone text-right">
                 رقم القرار
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-200 h-7 w-52 m-4 text-center font-cairo"
                    placeholder="00 / court / 2000"
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
                        name="judgmentdate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-colorone text-right">
                              تاريخ القرار
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

export default LowCreate;

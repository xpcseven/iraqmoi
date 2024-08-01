"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createUsername } from "@/lib/action/username.action";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command";
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
import { Input } from "@mui/material";
import Link from "next/link";
import { Check, ChevronsUpDown } from "lucide-react";

const formSchema = z.object({
    userlogin: z.string().optional(),
    workplace: z.string().optional(),
    mderea: z.string().optional(),
    department: z.string().optional(),

  //--44
});

const CreateUserP = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        userlogin: "",
        workplace: "",
        mderea:"",
        department: "",
    },
  });

  // 2. Define a submit handler.
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
      await createUsername(values);
      router.push("/department");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      router.push("/department");
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
  const [value, setValue] = React.useState("");



  return (
    <div className="overflow-hidden ">
      <div className="h-full">
        <div className="h-full relative">
          {/* <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://i.ibb.co/dmv26YZ/Untitled-design.png" /> */}
          <div className="flex justify-center h-full">
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

              <div className="mt-10 mr-5 ml-5 pb-5 text-center  p-5 ">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-row-3"
                  >
                    {/* البيانات الشخصية */}
                    <h1 className="mt-4 mb-2 text-right border-b-2 border-red-200 font-bold text-sky-800">
                       صلاحيات الدخول
                    </h1>
                    <div className=" grid xl:grid-cols-5 xl:grid-row-4 lg:grid-cols-4 lg:grid-row-3 md:grid-cols-3 md:grid-row-2 sm:grid-cols-2 sm:grid-row-3 xs:grid-cols-1">
                      <FormField
                        control={form.control}
                        name="userlogin"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className=" text-colorone text-right">
                             اسم المستخدم
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
                                <option value="البطاقة الوطنية">البطاقة الوطنية</option>
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
                                        <Check className={cn(
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




                    </div>

                    <div>
                      <button
                        type="submit"
                        className="border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-36 h-11 text-white bg-sky-800 hover:bg-sky-700 mt-3"
                      >
                        حفظ
                      </button>
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
export default CreateUserP;

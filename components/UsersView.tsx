"use client";
import React, { useEffect, useState } from "react";
import { deleteUser } from "@/lib/action/user.action";
import { Button } from "@/components/ui/button";
import { Input } from "@mui/material";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import router from "next/router";
import Swal from "sweetalert2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { boolean } from "zod";

function UsersView(this: any, { allUsers }: any) {
  
  const [query, setQuery] = useState("");
  const [selectedWorkplace, setSelectedWorkplace] = useState("");
  const [selectedMderea, setSelectedMderea] = useState("");

  //---- filter allUsers Depending On Workplace Chosen
  const filteredUsers = selectedWorkplace
    ? allUsers?.users.filter((user: any) =>
        user.workplace.includes(selectedWorkplace)
      )
    : allUsers?.users;
  const worktypes = filteredUsers?.map(
    (user: { worktype: any }) => user.worktype
  ); //--- get worktype for allUsers

  //------ colect frc for all Worktype
  const wordCounts = worktypes?.reduce(
    (acc: { [x: string]: number }, val: string) => {
      if (acc[val]) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
      return acc;
    },
    {}
  );

  const ranks = filteredUsers?.map((user: { rank: any }) => user.rank);
  //------ colect frc for all rank
  const rankCounts = ranks?.reduce(
    (acc: { [x: string]: number }, val: string) => {
      if (acc[val]) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
      return acc;
    },
    {}
  );

  const workplaces = filteredUsers?.map(
    (user: { workplace: any }) => user.workplace
  );
  //------ colect frc for all workplace
  const workplaceCounts = workplaces?.reduce(
    (acc: { [x: string]: number }, val: string) => {
      if (acc[val]) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
      return acc;
    },
    {}
  );

  const genders = filteredUsers?.map((user: { gender: any }) => user.gender);
  //------ colect frc for all gender
  const genderCounts = genders?.reduce(
    (acc: { [x: string]: number }, val: string) => {
      if (acc[val]) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
      return acc;
    },
    {}
  );

  const academics = filteredUsers?.map(
    (user: { academic: any }) => user.academic
  );
  //------ colect frc for all gender
  const academicCounts = academics?.reduce(
    (acc: { [x: string]: number }, val: string) => {
      if (acc[val]) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
      return acc;
    },
    {}
  );

  //---- filter allUsers Depending On Mderea Chosen
  const filterUsers = selectedMderea
    ? allUsers?.users.filter((user: any) =>
        user.mderea.includes(selectedMderea)
      )
    : allUsers?.users;

  const frameworks = [
    { value: "", label: "" },
    { value: "مقر المديرية", label: "مقر المديرية" },
    { value: "1080 بعقوبة", label: "1080 بعقوبة" },
    { value: "1081 كنعان", label: "1081 كنعان" },
    { value: "1082 بني سعد", label: "1082 بني سعد" },
    { value: "1083 المعبر", label: "1083 المعبر" },
    { value: "1084 اشنونا", label: "1084 اشنونا" },
    { value: "1085 المقدادية", label: "1085 المقدادية" },
    { value: "1086 ابي صيدا", label: "1086 ابي صيدا" },
    { value: "1087 الوجيهية", label: "1087 الوجيهية" },
    { value: "1088 الخالص", label: "1088 الخالص" },
    { value: "1089 هبهب", label: "1089 هبهب" },
    { value: "1090 المنصورية", label: "1090 المنصورية" },
    { value: "1091 السد العظيم", label: "1091 السد العظيم" },
    { value: "1092 السلام", label: "1092 السلام" },
    { value: "1093 خانقين", label: "1093 خانقين" },
    { value: "1094 السعدية", label: "1094 السعدية" },
    { value: "1095 جلولاء", label: "1095 جلولاء" },
    { value: "1096 كفري", label: "1096 كفري" },
    { value: "1097 قرطبة", label: "1097 قرطبة" },
    { value: "1098 جبارة", label: "1098 جبارة" },
    { value: "1099 بلدروز", label: "1099 بلدروز" },
    { value: "1100 مندلي", label: "1100 مندلي" },
    { value: "1101 قزانية", label: "1101 قزانية" },
  ];

  const mdereaframework = [
    { value: "", label: "" },
    {
      value: "الاحوال المدنية و الجوازات و الاقامة/بغداد",
      label: "الاحوال المدنية و الجوازات و الاقامة/بغداد",
    },
    {
      value: "الاحوال المدنية و الجوازات و الاقامة/ديالى",
      label: "الاحوال المدنية و الجوازات و الاقامة/ديالى",
    },
  ];

  const [open, setOpen] = useState(false);

  const [opens, setOpens] = useState(false);

  //-------------- About pagination ---------------//
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20); //-----Number of items to display per page

  const handleChange = (value: any) => {
    setItemsPerPage(Number(value));
  };

  //-------------- Rank-Date-Name-Work Sort ----------------//
  const rankOrder = [
    "فريق اول",
    "فريق",
    "لواء",
    "عميد",
    "عقيد",
    "مقدم",
    "رائد",
    "نقيب",
    "ملازم اول",
    "ملازم ثاني",
    "مفوض",
    "رئيس عرفاء",
    "عريف",
    "نائب عريف",
    "شرطي",
    "موظف مدني",
  ];
  const worktypeOrder = [
    "مدير عام",
    "مدير محافظة",
    "مدير قسم",
    "وكيل مدير قسم",
    "مدير دائرة",
    "وكيل مدير الدائرة",
    "مدير شعبة",
    "مدير وحدة",
    "مصرح",
    "مدقق",
    "حسابات",
    "مدخل بيانات",
  ];

  const sortByRankWorktypeAndDowradate = (users: any[]) => {
    return users.sort((a, b) => {
      // If dowradate is the same, compare rank
      const rankComparison =
        rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank);
      if (rankComparison !== 0) {
        return rankComparison;
      }
      // Compare dowradate (assuming dowradate is a date string)
      const dateA = new Date(a.dowradate);
      const dateB = new Date(b.dowradate);
      const dateComparison = dateA.getTime() - dateB.getTime();
      if (dateComparison !== 0) {
        return dateComparison;
      }
      // If dowradate is the same, compare name alphabetically  -- name a.b.c sort
      const nameComparison = a.name.localeCompare(b.name);
      if (nameComparison !== 0) {
        return nameComparison;
      }
      // If rank is also the same, compare worktype
      return (
        worktypeOrder.indexOf(a.worktype) - worktypeOrder.indexOf(b.worktype)
      );
    });
  };
  const sortedUsers = sortByRankWorktypeAndDowradate(filteredUsers);
  //-------------- Rank-Date-Name-Work Sort ----------------//

  //-------------- pagination ---------------//

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers
    ?.filter(
      (user: any) =>
        user.name.includes(query) ||
        user.idnum.includes(query) ||
        user.workplace.includes(query) ||
        user.mderea.includes(query)
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  //-------------- pagination ---------------//

  //---------------Delete--------------------//
  const handleDelete = async (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("User Id => ", id);
          await deleteUser({ id });
          router.push("/persontable");
        } catch (error) {
          console.log(error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  //---------Delete----------//

  // حساب اعداد الضباط و المراتب و الموظفين
  let officer = 0;
  let mratb = 0;
  let madane = 0;



  return (
    <div className="flex flex-col min-h-screen min-w-fit">
      <div className="m-2 mt-5 flex flex-col flex-grow">
        <div className="flex justify-between">
          {/* حقل الخيارات المتقدمة --- الاضافة */}

          <div className=" flex">
            <div>
              <Link href="/createuser">
                <button className="p-2 border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl text-white bg-sky-800 hover:bg-sky-700 mr-1 ml-3 text-xs h-10 w-16">
                  اضافة
                </button>
              </Link>
            </div>
            {/* حقل الخيارات المتقدمة --- الاضافة */}
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className=" mb-3 border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl text-white bg-sky-800 hover:bg-sky-700 text-xs h-10 w-24 "
                  >
                    خيارات متقدمة
                  </button>
                </SheetTrigger>
                <SheetContent className=" font-cairo">
                  <SheetHeader className=" font-cairo">
                    <SheetTitle className="text-right mt-6 font-bold text-xl text-sky-800">
                      خيارات متقدمة
                    </SheetTitle>
                    <SheetDescription className="text-right font-semibold">
                      تحديد فئة معية يساهم بالبحث و الوصول السريع .
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-4 border-b-2 border-sky-800 p-3">
                    <h1 className=" text-sky-800">مديرية الاحوال المدنية</h1>
                    <Popover open={opens} onOpenChange={setOpens}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={opens}
                          className=" w-full justify-between text-black rounded-none bg-gray-200"
                        >
                          {selectedMderea
                            ? mdereaframework.find(
                                (mdereaframework) =>
                                  mdereaframework.value === selectedMderea
                              )?.label
                            : "مديرية الاحوال المدنية"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className=" p-0 font-cairo">
                        <Command className="bg-gray-400 w-80">
                          <CommandInput placeholder="Search framework..." />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {mdereaframework.map((mdereaframework) => (
                                <CommandItem
                                  className="hover:bg-slate-500 hover:text-white"
                                  key={mdereaframework.value}
                                  value={mdereaframework.value}
                                  onSelect={(currentValue) => {
                                    setSelectedMderea(
                                      currentValue === selectedMderea
                                        ? ""
                                        : currentValue
                                    );
                                    setOpens(false);
                                    setQuery(mdereaframework.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      selectedMderea === mdereaframework.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {mdereaframework.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>

                    {/* chose workplace  */}
                    <h1 className="pt-3 text-sky-800">دائرة الاحوال المدنية</h1>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className=" w-full justify-between text-black rounded-none bg-gray-200"
                        >
                          {selectedWorkplace
                            ? frameworks.find(
                                (framework) =>
                                  framework.value === selectedWorkplace
                              )?.label
                            : "دائرة الاحوال المدنية"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0 font-cairo">
                        <Command className="bg-gray-400 ">
                          <CommandInput placeholder="Search framework..." />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {frameworks.map((framework) => (
                                <CommandItem
                                  className="hover:bg-slate-500 hover:text-white"
                                  key={framework.value}
                                  value={framework.value}
                                  onSelect={(currentValue) => {
                                    setSelectedWorkplace(
                                      currentValue === selectedWorkplace
                                        ? ""
                                        : currentValue
                                    );
                                    setOpen(false);
                                    setQuery(framework.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      selectedWorkplace === framework.value
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
                    <h1 className="pt-3 text-sky-800">
                      حدد عدد العناصر في الصفحة
                    </h1>
                    <Select onValueChange={handleChange}>
                      <SelectTrigger
                        className=" bg-gray-200 border rounded-none mt-2 "
                        dir="rtl"
                      >
                        <SelectValue placeholder="عناصر الصفحة" />
                      </SelectTrigger>
                      <SelectContent className=" bg-white">
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="10"
                        >
                          10
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="15"
                        >
                          15
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="20"
                        >
                          20
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="25"
                        >
                          25
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="30"
                        >
                          30
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="35"
                        >
                          35
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="40"
                        >
                          40
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="45"
                        >
                          45
                        </SelectItem>
                        <SelectItem
                          className=" hover:bg-sky-800 hover:text-white"
                          value="50"
                        >
                          50
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Link href="/transferuser">
                    <button className="p-2 mt-3 border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-36 h-11 text-white bg-sky-800 hover:bg-sky-700 mr-1 ml-3">النقل و التنسيب</button>
                    </Link>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild></SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

            </div>

          </div>
          {/* حقل الخيارات المتقدمة --- الاضافة */}

          {/* //-------------- About pagination ---------------// */}
          <ul className="flex text-right justify-between mt-3">
            {Array.from(
              { length: Math.ceil(filteredUsers?.length / itemsPerPage) },
              (_, i) => (
                <li key={i} className="mr-1">
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-sky-800 text-white animate-pulse hover:text-white rounded-2xl font-bold"
                        : "bg-gray-400 hover:bg-sky-800 hover:text-white rounded-2xl"
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          {/* //-------------- About pagination ---------------// */}

          <div className="font-cairo">
            {/* ------- Search -------- */}
            <Input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث"
              className="w-60 h-7 bg-gray-200 text-right border-b-2 ml-1 border-sky-800 drop-shadow "
            />
            {/* ------- Search -------- */}
          </div>
        </div>

        <div className="flex justify-between">
          <div></div>

          <div className="flex flex-col ml-4">
            <div className="flex ">
              <div className="">
                {rankCounts &&
                  Object.keys(rankCounts).map((word, index) => (
                    <div key={index}></div>
                  ))}
                {/* {user.rank === "موظف مدني" ? user.joptitle : user.rank} */}

                <div className="ml-2">
                  <th>
                    <h1 className="text-sky-800">الضباط</h1>
                    {rankCounts &&
                      Object.keys(rankCounts).map((word) => {
                        if (
                          word === "ملازم اول" ||
                          word === "ملازم" ||
                          word === "نقيب" ||
                          word === "رائد" ||
                          word === "مقدم" ||
                          word === "عقيد" ||
                          word === "عميد"
                        ) {
                          officer += rankCounts[word];
                        }
                        return null;
                      })}
                  </th>
                  <td>
                    <div className=" text-yellow-600 font-bold">
                      <div className="mr-2">{officer}</div>
                    </div>
                  </td>
                </div>
              </div>

              <div className="">
                <th>
                  <h1 className="text-sky-800">المراتب</h1>
                  {rankCounts &&
                    Object.keys(rankCounts).map((word) => {
                      if (
                        word === "مفوض" ||
                        word === "رئيس عرفاء" ||
                        word === "عريف" ||
                        word === "نائب عريف" ||
                        word === "شرطي"
                      ) {
                        mratb += rankCounts[word];
                      }
                      return null;
                    })}
                </th>
                <td>
                  <div className="text-yellow-600 font-bold">
                    <div className="mr-2">{mratb}</div>
                  </div>
                </td>
              </div>

              <div className="mr-2">
                <th>
                  <h1 className="text-sky-800">موظفين</h1>
                  {rankCounts &&
                    Object.keys(rankCounts).map((word) => {
                      if (word === "موظف مدني") {
                        madane += rankCounts[word];
                      }
                      return null;
                    })}
                </th>
                <td>
                  <div className="text-yellow-600 font-bold">
                    <div className="mr-2">{madane}</div>
                  </div>
                </td>
              </div>
            </div>


          </div>
        </div>

        <table
          className=" text-xs text-center mr-1 ml-1 mt-1 font-semibold w-full"
          id="table1"
        >
          <thead className="bg-sky-800 text-white border-b-2 border-yellow-500">
            <tr>
              <th></th>
              <th className="pt-2 pb-2">ت</th>
              <th className="pt-2 pb-2">الرقم الاحصائي</th>
              <th className="pt-2 pb-2">الرتبة</th>
              <th className="pt-2 pb-2">الاسم</th>
            <th className="pt-2 pb-2">اللقب</th>
              <th className="pt-2 pb-2"></th>
              <th className="pt-2 pb-2">الجنس</th>
              <th className="pt-2 pb-2">صفة العمل</th>
              <th className="pt-2 pb-2">الدائرة</th>
              <th className="pt-2 pb-2">التحصيل الدراسي</th>
              <th className="pt-2 pb-2">تاريخ الميلاد</th>
              <th className="pt-2 pb-2">الحالة الاجتماعية</th>
              <th className="pt-2 pb-2">فصيلة الدم</th>
              <th className="pt-2 pb-2">رقم الهاتف</th>
              <th className="pt-2 pb-2">خيارات</th>
            </tr>
          </thead>
          {currentItems.map((user: any, index: number) => (
            <tbody
              className="border border-gray-500 hover:bg-gray-300 hover:text-black"
              key={user._id}
            >
              <tr>
                <td>
                  <span className="relative flex h-3 w-3">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${
                        user.retire === "متقاعد"
                          ? "bg-green-600"
                          : user.retire === "منقطع عن الخدمة ؟"
                          ? "bg-orange-500"
                          : "bg-gray-200"
                      } opacity-75`}
                    ></span>
                  </span>
                </td>

                <td>{indexOfFirstItem + index + 1}</td>
                <td>{user.idnum}</td>
                <td
                  className={`${
                    user.arkan === "نعم" ? "border-r-8 border-red-700" : ""
                  }
                opacity-100 text-black`}
                >
                  {user.rank === "موظف مدني" ? user.joptitle : user.rank}
                </td>
                <td className="text-right">{user.name}</td>
               <td>{user.familyname}</td>
                {/* <td className="text-right">{user.familyname}</td> */}
                <td>

                <Link href={`usersprofile/${user._id}`}>
                    <button>
                      <svg
                        className="w-6 h-6 hover:text-orange-600 ml-1 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </button>
                  </Link>
                </td>
                <td>{user.gender}</td>
                <td>{user.worktype}</td>
                <td className="text-right">{user.workplace}</td>
                <td>{user.academic}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.maritalstatus}</td>
                <td>{user.bloodgroup}</td>
                <td>{user.phonenumber}</td>
                <td className=" flex justify-center">
                  <Link href={`printview/${user._id}`}>
                    <button>
                      <svg
                        className="w-6 h-6 hover:text-indigo-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link href={`addfamily/${user._id}`}>
                    <button>
                    <svg className="w-6 h-6 mr-2 hover:text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

                    </button>
                  </Link>

                  <Link href={`addlow/${user._id}`}>
                    <button>
                  <svg className="w-6 h-6 mr-2 hover:text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
</svg>


                    </button>
                  </Link>


                  <Link href={`addtrip/${user._id}`}>
                    <button>


<svg className="w-6 h-6 mr-2 hover:text-lime-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
</svg>



                    </button>
                  </Link>




                  <Link href={`/updateuser/${user._id}`}>
                    <svg
                      className="w-6 h-6 hover:text-green-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Link>

                  <button onClick={() => handleDelete(user._id)}>
                    <svg
                      className="w-6 h-6 hover:text-red-600 mr-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div>
                    <Link href="/haekaleaprint">
                    <button className="p-2 mt-3 border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-36 h-11 text-white bg-sky-800 hover:bg-sky-700 mr-1 ml-3">طباعة الهيكلية</button>
                    </Link>
                  </div>
      </div>

      <footer className="">
        <table className="bg-sky-700 mt-4 w-full">
          <thead className="bg-sky-800 border-b-2 border-yellow-400">
            <tr>
              <th className="text-yellow-300">احصائيات</th>
            </tr>
          </thead>
          <thead>
            <td className="flex mt-1 mb-1">
              <div className="mr-4  gap-3 bg-sky-800">
                <h1 className="text-white border-b ">الهيكلية</h1>
                {wordCounts &&
                  Object.keys(wordCounts).map((word, index) => (
                    <div key={index}>
                      <tr className="flex justify-between">
                        <th className="  text-xs text-yellow-400 ml-3 p-1">
                          {word}
                        </th>
                        <td className="  text-xs text-yellow-100 p-1">
                          {wordCounts[word]}
                        </td>
                      </tr>
                    </div>
                  ))}
              </div>

              <div className="mr-4  gap-3 bg-sky-800">
                <h1 className="text-white border-b ">الرتبة</h1>
                {rankCounts &&
                  Object.keys(rankCounts).map((word, index) => (
                    <div key={index}>
                      <tr className="flex justify-between">
                        <th className="  text-xs text-yellow-400 ml-3 p-1">
                          {word}
                        </th>
                        <td className="  text-xs text-yellow-100 p-1">
                          {rankCounts[word]}
                        </td>
                      </tr>
                    </div>
                  ))}
              </div>

              <div className="mr-4  gap-3 bg-sky-800">
                <h1 className="text-white border-b ">العدد</h1>
                {workplaceCounts &&
                  Object.keys(workplaceCounts).map((word, index) => (
                    <div key={index}>
                      <tr className="flex justify-between">
                        <th className="  text-xs text-yellow-400 ml-3 p-1">
                          {word}
                        </th>
                        <td className=" text-xs text-yellow-100 p-1">
                          {workplaceCounts[word]}
                        </td>
                      </tr>
                    </div>
                  ))}

                <div className=" bg-sky-800 text-white flex flex-col text-center">
                  <h1 className="text-white border-b mt-3 text-right">الجنس</h1>
                  {genderCounts &&
                    Object.keys(genderCounts).map((word, index) => (
                      <div key={index}>
                        <div className="text-center text-yellow-400">
                          <tr className="flex justify-between">
                            <th className=" text-xs text-yellow-400 ml-3 p-1">
                              {word}
                            </th>
                            <td className=" text-xs text-yellow-100 p-1">
                              {genderCounts[word]}
                            </td>
                          </tr>
                        </div>
                      </div>
                    ))}
                </div>

                <div className=" bg-sky-800 text-white flex flex-col text-center">
                  <h1 className="text-white border-b mt-3 text-right">
                    التحصيل الدراسي
                  </h1>
                  {academicCounts &&
                    Object.keys(academicCounts).map((word, index) => (
                      <div key={index}>
                        <div className="text-center text-yellow-400">
                          <tr className="flex justify-between">
                            <th className=" text-xs text-yellow-400 ml-3 p-1">
                              {word}
                            </th>
                            <td className=" text-xs text-yellow-100 p-1">
                              {academicCounts[word]}
                            </td>
                          </tr>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </td>
          </thead>
        </table>
        <Link href="copyrights" >
        <h1 className="text-white text-xs bg-sky-800 p-1 text-center border-t-2 border-yellow-400 w-full">all rights reserved for THE FUSION@2024</h1>
        </Link>
      </footer>
    </div>
  );
}

export default UsersView ;

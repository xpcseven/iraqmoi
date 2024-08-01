"use client";
import { Popover } from "@radix-ui/react-popover";
import React, { useEffect, useState } from "react";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

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


  const [open, setOpen] = useState(false);

  const [opens, setOpens] = useState(false);

  //-------------- About pagination ---------------//
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100); //-----Number of items to display per page

  const handleChange = (value: any) => {
    setItemsPerPage(Number(value));
  };

  //-------------- Rank-Date-Name-Work Sort ----------------//
  const rankOrder = [
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


  // حساب اعداد الضباط و المراتب و الموظفين
  let officer = 0;
  let mratb = 0;
  let madane = 0;

  type SelectedColumns = {
    idnum: boolean;
    rank: boolean;
    name: boolean;
    familyname: boolean;
    worktype: boolean;
    academic: boolean;
    gender: boolean;
    workplace: boolean;
    placeofbirth: boolean;
    nationality: boolean;
    dateofbirth: boolean;
    phonenumber: boolean;
    joptitle: boolean;
    mderea: boolean;
    department: boolean;
    jopid: boolean;
    healthnum: boolean;
    guntype: boolean;
    gunnum: boolean;
    civilcoll: boolean;
    militarycoll: boolean;
    dowra: boolean;
    dowradate: boolean;
    wkala: boolean;
    arkan: boolean;
    jopdigree: boolean;
    mothername: boolean;
    maritalstatus: boolean;
    kidsnum: boolean;
    bloodgroup: boolean;
    nationalnum: boolean;
    cardnum: boolean;
    recordnum: boolean;
    pagenum: boolean;

    state: boolean;
    address: boolean;
    mktarname: boolean;
    nearableplace: boolean;
  };

  const handleCheckboxChange = (column: keyof SelectedColumns) => {
    setSelectedColumns(prevState => ({
      ...prevState,
      [column]: !prevState[column]
    }));
  };


    const [selectedColumns, setSelectedColumns] = useState({
      idnum: true,
      rank: true,
      name: true,
      familyname: true,
      worktype:true,
      academic: true,
      gender: false,
      workplace: false,
      placeofbirth: false,
      nationality: false,
      dateofbirth: false,
      phonenumber: false,
      joptitle: false,
      mderea: false,
      department: false,
      jopid: false,
      healthnum: false,
      guntype: false,
      gunnum: false,
      civilcoll: false,
      militarycoll: false,
      dowra: false,
      dowradate: false,
      wkala: false,
      arkan: false,
      jopdigree: false,
      mothername: false,
      maritalstatus: false,
      kidsnum: false,
      bloodgroup: false,
      nationalnum: false,
      cardnum: false,
      recordnum: false,
      pagenum: false,

      state: false,
      address: false,
      mktarname: false,
      nearableplace: false,

    });

  return (
    <div className="flex flex-col min-h-screen min-w-fit">
      <div className="m-2 mt-5 flex flex-col flex-grow">


        <div className="flex justify-between">
          <div></div>

          <div className="flex flex-col ml-4">
          </div>
        </div>

<Sheet>
  <SheetTrigger className="text-right font-cairo">هيكلية القسم</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-right font-cairo border-b-2 mt-3">خيارات طباعة الهيكلية</SheetTitle>
      <SheetDescription className="flex text-right font-cairo">
<div className="flex flex-col ">
<h1 className="border-b-2 text-green-700 font-bold">بيانات عامة</h1>
      <label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.idnum}
            onChange={() => handleCheckboxChange('idnum')}
          />
          الرقم الاحصائي
</label>




<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.rank}
            onChange={() => handleCheckboxChange('rank')}
          />
          الرتبة 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.name}
            onChange={() => handleCheckboxChange('name')}
          />
          الاسم 
</label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.familyname}
            onChange={() => handleCheckboxChange('familyname')}
          />
          اللقب
        </label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.gender}
            onChange={() => handleCheckboxChange('gender')}
          />
          الجنس
        </label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.nationality}
            onChange={() => handleCheckboxChange('nationality')}
          />
          القومية 
</label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.worktype}
            onChange={() => handleCheckboxChange('worktype')}
          />
          صفة العمل 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.workplace}
            onChange={() => handleCheckboxChange('workplace')}
          />
          الدائرة 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.academic}
            onChange={() => handleCheckboxChange('academic')}
          />
          التحصيل الدراسي 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.civilcoll}
            onChange={() => handleCheckboxChange('civilcoll')}
          />
          الجامعة المدنية  
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.militarycoll}
            onChange={() => handleCheckboxChange('militarycoll')}
          />
          الكلية او المعهد العسكري   
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.placeofbirth}
            onChange={() => handleCheckboxChange('placeofbirth')}
          />
          محل الولادة 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.dateofbirth}
            onChange={() => handleCheckboxChange('dateofbirth')}
          />
          تاريخ الميلاد 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.phonenumber}
            onChange={() => handleCheckboxChange('phonenumber')}
          />
          رقم الهاتف
        </label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.joptitle}
            onChange={() => handleCheckboxChange('joptitle')}
          />
العنوان الوظيفي
        </label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.mderea}
            onChange={() => handleCheckboxChange('mderea')}
          />
          المديرية
        </label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.department}
            onChange={() => handleCheckboxChange('department')}
          />
          القسم
        </label>

        <label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.jopid}
            onChange={() => handleCheckboxChange('jopid')}
          />
          الرقم الوظيفي 
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.healthnum}
            onChange={() => handleCheckboxChange('healthnum')}
          />
          رقم الضمان الصحي
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.guntype}
            onChange={() => handleCheckboxChange('guntype')}
          />
          نوع السلاح
</label>

<label>
          <input  className="ml-2"
            type="checkbox"
            checked={selectedColumns.gunnum}
            onChange={() => handleCheckboxChange('gunnum')}
          />
          رقم السلاح
</label>
</div>
<div className="flex flex-col mr-3 ">
<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.dowra}
            onChange={() => handleCheckboxChange('dowra')}
          />
         الدورة
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.wkala}
            onChange={() => handleCheckboxChange('wkala')}
          />
         تاريخ التخرج
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.dowradate}
            onChange={() => handleCheckboxChange('dowradate')}
          />
         تاريخ التخرج
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.wkala}
            onChange={() => handleCheckboxChange('wkala')}
          />
         الوكالة 
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.jopdigree}
            onChange={() => handleCheckboxChange('jopdigree')}
          />
         الدرجة الوظيفية 
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.arkan}
            onChange={() => handleCheckboxChange('arkan')}
          />
         كلية الاركان 
</label>
<h1 className="border-b-2 mt-3 text-green-700 font-bold">الاجتماعية</h1>
<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.mothername}
            onChange={() => handleCheckboxChange('mothername')}
          />
          اسم الام 
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.maritalstatus}
            onChange={() => handleCheckboxChange('maritalstatus')}
          />
       الحالة الاجتماعية
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.kidsnum}
            onChange={() => handleCheckboxChange('kidsnum')}
          />
       عدد الاطفال 
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.bloodgroup}
            onChange={() => handleCheckboxChange('bloodgroup')}
          />
        فصيلة الدم
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.nationalnum}
            onChange={() => handleCheckboxChange('nationalnum')}
          />
         الرقم الوطني
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.cardnum}
            onChange={() => handleCheckboxChange('cardnum')}
          />
          رقم الهوية
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.recordnum}
            onChange={() => handleCheckboxChange('recordnum')}
          />
          رقم السجل
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.pagenum}
            onChange={() => handleCheckboxChange('pagenum')}
          />
          رقم الصحيفة
</label>

<h1 className="border-b-2 mt-3 text-green-700 font-bold">معلومات السكن</h1>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.state}
            onChange={() => handleCheckboxChange('state')}
          />
          المحافظة 
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.address}
            onChange={() => handleCheckboxChange('address')}
          />
          العنوان 
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.mktarname}
            onChange={() => handleCheckboxChange('mktarname')}
          />
         اسم المختار
</label>

<label>
          <input className="ml-2"
            type="checkbox"
            checked={selectedColumns.nearableplace}
            onChange={() => handleCheckboxChange('nearableplace')}
          />
          نقطة دالة 
</label>

</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>



        <table
          className=" text-xs text-center mr-1 ml-1 mt-1 font-semibold"
          id="table1"
        >
          <thead className="bg-sky-800 text-white border-b-2 border-yellow-500">
            <tr>
              <th></th>
              <th className="pt-2 pb-2">ت</th>
              {selectedColumns.idnum && <th className="pt-2 pb-2">الرقم الاحصائي</th>}
              {selectedColumns.rank && <th className="pt-2 pb-2">الرتبة</th>}
              {selectedColumns.jopdigree && <th className="pt-2 pb-2">الدرجة الوظيفية</th>}
              {selectedColumns.name && <th className="pt-2 pb-2">الاسم</th>}
              {selectedColumns.familyname && <th className="pt-2 pb-2">اللقب</th>}
              {selectedColumns.gender &&<th className="pt-2 pb-2">الجنس</th>}
              {selectedColumns.nationality &&<th className="pt-2 pb-2">القومية</th>}
              {selectedColumns.worktype &&<th className="pt-2 pb-2">صفة العمل</th>}
              {selectedColumns.workplace &&<th className="pt-2 pb-2">الدائرة</th>}
              {selectedColumns.wkala &&<th className="pt-2 pb-2">الدائرة</th>}
              {selectedColumns.academic &&<th className="pt-2 pb-2">التحصيل الدراسي</th>}
              {selectedColumns.civilcoll && <th className="pt-2 pb-2">الجامعة</th>}
              {selectedColumns.militarycoll && <th className="pt-2 pb-2">الكلية العسكرية</th>}
              {selectedColumns.dowra && <th className="pt-2 pb-2">الدورة العسكرية</th>}
              {selectedColumns.dowradate && <th className="pt-2 pb-2">تاريخ التخرج</th>}
              {selectedColumns.arkan && <th className="pt-2 pb-2">كلية الاركان</th>}
              {selectedColumns.placeofbirth &&<th className="pt-2 pb-2">محل الولادة</th>}
              {selectedColumns.dateofbirth &&<th className="pt-2 pb-2">تاريخ الولادة</th>}
              {selectedColumns.phonenumber &&<th className="pt-2 pb-2">رقم الهاتف</th>}
              {selectedColumns.joptitle &&<th className="pt-2 pb-2">العنوان الوظيفي</th>}
              {selectedColumns.mderea &&<th className="pt-2 pb-2">المديرية</th>}
              {selectedColumns.department &&<th className="pt-2 pb-2">القسم</th>}
              {selectedColumns.jopid &&<th className="pt-2 pb-2">الرقم الوظيفي</th>}
              {selectedColumns.healthnum &&<th className="pt-2 pb-2">الضمان الصحي</th>}
              {selectedColumns.guntype &&<th className="pt-2 pb-2">نوع السلاح</th>}
              {selectedColumns.gunnum &&<th className="pt-2 pb-2">رقم السلاح</th>}
              {selectedColumns.mothername &&<th className="pt-2 pb-2">اسم الام</th>}
              {selectedColumns.maritalstatus &&<th className="pt-2 pb-2">الحالة الاجتماعية</th>}
              {selectedColumns.kidsnum &&<th className="pt-2 pb-2">عدد الاطفال</th>}
              {selectedColumns.bloodgroup &&<th className="pt-2 pb-2">فصيلة الدم</th>}
              {selectedColumns.nationalnum &&<th className="pt-2 pb-2">الرقم الوطني</th>}
              {selectedColumns.cardnum &&<th className="pt-2 pb-2">رقم الهوية</th>}
              {selectedColumns.recordnum &&<th className="pt-2 pb-2">رقم السجل</th>}
              {selectedColumns.pagenum &&<th className="pt-2 pb-2">رقم الصحيفة</th>}
              {selectedColumns.state &&<th className="pt-2 pb-2">المحافظة</th>}
              {selectedColumns.address &&<th className="pt-2 pb-2">العنوان</th>}
              {selectedColumns.mktarname &&<th className="pt-2 pb-2">اسم المختار</th>}
              {selectedColumns.nearableplace &&<th className="pt-2 pb-2">نقطة دالة</th>}

            </tr>
          </thead>
          {currentItems.map((user: any, index: number) => (
            <tbody
              className="border-b border-gray-500 hover:text-black"
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

                <td className="p-2">{indexOfFirstItem + index + 1}</td>
                {selectedColumns.idnum &&<td>{user.idnum}</td>}
                {selectedColumns.rank && <td className={`${user.arkan === "نعم" ? "border-r-8 border-red-700" : ""}opacity-100 text-black`}>
                  {user.rank === "موظف مدني" ? user.joptitle : user.rank}</td>}
                {selectedColumns.jopdigree &&<td className="">{user.jopdigree}</td>}
                {selectedColumns.name &&<td className="">{user.name}</td>}
                {selectedColumns.familyname && <td>{user.familyname}</td>}
                {selectedColumns.gender && <td>{user.gender}</td>}
                {selectedColumns.nationality && <td>{user.nationality}</td>}
                {selectedColumns.worktype &&<td className="">{user.worktype}</td>}
                {selectedColumns.workplace &&<td className="">{user.workplace}</td>}
                {selectedColumns.wkala &&<td className="">{user.wkala}</td>}
                {selectedColumns.academic &&<td className="">{user.academic}</td>}
                {selectedColumns.civilcoll &&<td className="">{user.civilcoll}</td>}
                {selectedColumns.militarycoll &&<td className="">{user.militarycoll}</td>}
                {selectedColumns.dowra &&<td className="">{user.dowra}</td>}
                {selectedColumns.dowradate &&<td className="">{user.dowradate}</td>}
                {selectedColumns.arkan &&<td className="">{user.arkan}</td>}
                {selectedColumns.placeofbirth &&<td className="">{user.placeofbirth}</td>}
                {selectedColumns.dateofbirth &&<td className="">{user.dateofbirth}</td>}
                {selectedColumns.phonenumber &&<td className="">{user.phonenumber}</td>}
                {selectedColumns.joptitle &&<td className="">{user.joptitle}</td>}
                {selectedColumns.mderea &&<td className="">{user.mderea}</td>}
                {selectedColumns.department &&<td className="">{user.department}</td>}
                {selectedColumns.jopid &&<td className="">{user.jopid}</td>}
                {selectedColumns.healthnum &&<td className="">{user.healthnum}</td>}
                {selectedColumns.guntype &&<td className="">{user.guntype}</td>}
                {selectedColumns.gunnum &&<td className="">{user.gunnum}</td>}
                {selectedColumns.mothername &&<td className="">{user.mothername}</td>}
                {selectedColumns.maritalstatus &&<td className="">{user.maritalstatus}</td>}
                {selectedColumns.kidsnum &&<td className="">{user.kidsnum}</td>}
                {selectedColumns.bloodgroup &&<td className="">{user.bloodgroup}</td>}
                {selectedColumns.nationalnum &&<td className="">{user.nationalnum}</td>}
                {selectedColumns.cardnum &&<td className="">{user.cardnum}</td>}
                {selectedColumns.recordnum &&<td className="">{user.recordnum}</td>}
                {selectedColumns.pagenum &&<td className="">{user.pagenum}</td>}
                {selectedColumns.state &&<td className="">{user.state}</td>}
                {selectedColumns.address &&<td className="">{user.address}</td>}
                {selectedColumns.mktarname &&<td className="">{user.mktarname}</td>}
                {selectedColumns.nearableplace &&<td className="">{user.nearableplace}</td>}

              </tr>
            </tbody>
          ))}
        </table>
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



            <table className=" mt-4 w-full">
          <thead className=" border-b-2 border-black">
            <tr>
              <th className="text-black">احصائيات</th>
            </tr>
          </thead>
          <thead>
            <td className="flex mt-1 mb-1">
              <div className="mr-4  gap-3">
                <h1 className="text-black border-b ">الهيكلية</h1>
                {wordCounts &&
                  Object.keys(wordCounts).map((word, index) => (
                    <div key={index}>
                      <tr className="flex justify-between">
                        <th className="  text-xs text-black ml-3 p-1">
                          {word}
                        </th>
                        <td className="  text-xs text-black p-1">
                          {wordCounts[word]}
                        </td>
                      </tr>
                    </div>
                  ))}
              </div>

              <div className="mr-4  gap-3">
                <h1 className="text-black border-b ">الرتبة</h1>
                {rankCounts &&
                  Object.keys(rankCounts).map((word, index) => (
                    <div key={index}>
                      <tr className="flex justify-between">
                        <th className="  text-xs text-black ml-3 p-1">
                          {word}
                        </th>
                        <td className="  text-xs text-black p-1">
                          {rankCounts[word]}
                        </td>
                      </tr>
                    </div>
                  ))}
              </div>

              <div className="mr-4  gap-3">
                <h1 className="text-black border-b ">العدد</h1>
                {workplaceCounts &&
                  Object.keys(workplaceCounts).map((word, index) => (
                    <div key={index}>
                      <tr className="flex justify-between">
                        <th className="  text-xs text-black ml-3 p-1">
                          {word}
                        </th>
                        <td className=" text-xs text-black p-1">
                          {workplaceCounts[word]}
                        </td>
                      </tr>
                    </div>
                  ))}

                <div className="  text-black flex flex-col text-center">
                  <h1 className="text-black border-b mt-3 text-right">الجنس</h1>
                  {genderCounts &&
                    Object.keys(genderCounts).map((word, index) => (
                      <div key={index}>
                        <div className="text-center text-black">
                          <tr className="flex justify-between">
                            <th className=" text-xs text-black ml-3 p-1">
                              {word}
                            </th>
                            <td className=" text-xs text-black p-1">
                              {genderCounts[word]}
                            </td>
                          </tr>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="  text-black flex flex-col text-center">
                  <h1 className="text-black border-b mt-3 text-right">
                    التحصيل الدراسي
                  </h1>
                  {academicCounts &&
                    Object.keys(academicCounts).map((word, index) => (
                      <div key={index}>
                        <div className="text-center text-black">
                          <tr className="flex justify-between">
                            <th className=" text-xs text-black ml-3 p-1">
                              {word}
                            </th>
                            <td className=" text-xs text-black p-1">
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
      </div>


    </div>
  );
}

export default UsersView;

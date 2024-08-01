"use client"
import React from "react";
import FamilyTable from "./FamilyTable";
import LowTable from "./LowTable";
import CreateTrip from "./TripCreate";
import TripTable from "./TripTable";
function UsersProfile({ userInfo }: any) {
  const parseUserInfo = JSON.parse(userInfo);
  return (
    <div className="pr-3 pl-3">
      <div className="flex justify-between pt-2">
        <h2 className=" font-bold mt-44 bg-sky-800 text-yellow-400  border-b-2 border-yellow-500 p-2 w-full">البيانات الشخصية</h2>
        <img
          className=" h-52 w-40 mr-2 border border-red-100 mt-3  "
          src=""
        />
      </div>
      {/* جدول البيانات الشخصية */}
      <table className="  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <thead className="p-5">
          <tr>
            <th
              className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  text-colortwo text-right"
              id="elementToChange"
            >
              الرقم الاحصائي
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  font-bold text-hussam2">
              {parseUserInfo.idnum}
            </td>
          </tr>

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الرتبة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.rank}
            </td>
          </tr>

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الاسم
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.name}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              اللقب
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {" "}
              {parseUserInfo.familyname}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الجنس
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {" "}
              {parseUserInfo.gender}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              صفة العمل
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.worktype}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الدائرة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.workplace}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              محل الولادة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.placeofbirth}
            </td>
          </tr>
        </thead>

        <thead className="p-5">
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  text-colortwo text-right">
              تاريخ الميلاد
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  font-bold text-hussam2">
              {parseUserInfo.dateofbirth}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  text-colortwo text-right">
              رقم الهاتف
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  font-bold text-hussam2">
              {parseUserInfo.phonenumber}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  text-colortwo text-right">
              العنوان الوظيفي
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  font-bold text-hussam2">
              {" "}
              {parseUserInfo.joptitle}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  text-colortwo text-right">
              الوكالة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  font-bold text-hussam2">
              {parseUserInfo.wkala}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  text-colortwo text-right">
              المديرية
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md  font-bold text-hussam2">
              {parseUserInfo.mderea}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              القسم
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.department}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الرقم الوظيفي
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.jopid}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              رقم الضمان الصحي
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.healthnum}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              نوع السلاح
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.guntype}
            </td>
          </tr>
        </thead>

        <thead className="p-5">
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              رقم السلاح
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.gunnum}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xssm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              العمل السابق
            </th>
            <td className="p-2 text-xssm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.lastworkhome}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xssm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الجامعة المدنية
            </th>
            <td className="p-2 text-xssm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {" "}
              {parseUserInfo.civilcoll}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xssm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الكلية او المعهد العسكري
            </th>
            <td className="p-2 text-xssm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.militarycoll}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الدورة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.dowra}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              تاريخ التخرج
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.dowradate}
            </td>
          </tr>
        </thead>
      </table>

      {/* جدول البيانات الاجتماعية */}
      <h2 className="text-md font-bold bg-sky-800 text-yellow-400  border-b-2 border-yellow-500 p-2">
        البيانات الاجتماعية
      </h2>
      <table className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <thead className="p-5">
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              اسم الام
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.mothername}
            </td>
          </tr>

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الحالة الاجتماعية
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.maritalstatus}
            </td>
          </tr>

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              عدد الاطفال
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.kidsnum}
            </td>
          </tr>
        </thead>

        <thead className="p-5">

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              فصيلة الدم
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.bloodgroup}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              الرقم الوطني
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.nationalnum}
            </td>
          </tr>

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              رقم الهوية
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.cardnum}
            </td>
          </tr>
        </thead>
        <thead className="p-5">

          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              رقم السجل
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.recordnum}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              رقم الصحيفة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.pagenum}
            </td>
          </tr>
        </thead>
      </table>
      {/* جدول بيانات السكن */}
      <h2 className="text-md font-bold mt-3 mb-3 bg-sky-800 text-yellow-400  border-b-2 border-yellow-500 p-2">
        معلومات السكن
      </h2>
      <table className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <thead className="p-5">
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              المحافظة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.state}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              عنوان السكن
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.address}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              مكتب معلومات السكن
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.mktb}
            </td>
          </tr>
        </thead>

        <thead className="p-5">
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              اسم المختار
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.mktarname}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              رقم الاستمارة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.cardidnum}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              نقطة دالة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.nearableplace}
            </td>
          </tr>
        </thead>

        <thead className="p-5">
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              تاريخ التنظيم
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.dateoff}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              محلة
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.ma}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              زقاق
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.zu}
            </td>
          </tr>
          <tr>
            <th className="p-2 text-xs sm:text-xs md:text-sm lg:text-md text-colortwo text-right">
              دار
            </th>
            <td className="p-2 text-xs sm:text-xs md:text-sm lg:text-md font-bold text-hussam2">
              {parseUserInfo.da}
            </td>
          </tr>
        </thead>
      </table>



      <FamilyTable currentItems={parseUserInfo?.family} />

      <TripTable currentItems={parseUserInfo?.trip} />

      <LowTable currentItems={parseUserInfo?.low} />

    </div>
  );
}

export default UsersProfile;

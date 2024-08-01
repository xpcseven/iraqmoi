"use client";
import { deleteUserFamily } from "@/lib/action/family.action";
import Link from "next/link";
import router from "next/router";
import React from "react";
import Swal from "sweetalert2";

export default function FamilyTable({ currentItems }: any) {

  const allsefaOrder = [
    "زوجة",
    "ابن",
    "ابنة",
    "اخ",
    "اخت",
    "عم/ـة",
    "خال/ـة",
  ];
  
  const sortbyallsefa = (users: any[]) => {
    return users.sort((a, b) => {
      const allsefaComparison =
        allsefaOrder.indexOf(a.allsefa) - allsefaOrder.indexOf(b.allsefa);
      if (allsefaComparison !== 0) {
        return allsefaComparison;
      }
      return 0; // If they are the same, no need to compare further
    });
  };
  
  // تطبيق الفرز على currentItems
  const sortedItems = sortbyallsefa(currentItems);


  if (currentItems.length === 0) return <h1 className="bg-sky-800 text-yellow-400 mb-1 text-center">لم تتم اضافة بيانات العائلة</h1>;

  const handleDeleteFamily = async (id: any) => {
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
          await deleteUserFamily({ id });
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
  
  return (
    <div>
      <h1 className="text-yellow-400 text-lg font-bold bg-sky-800 mr-1 text-right pr-2">افراد العائلة</h1>
      <table
        className=" text-center mr-1 ml-1 mt-1 font-semibold min-w-full mb-5 text-sm"
        id="table1"
      >
        <thead className="bg-sky-800 text-white border-b-2 border-yellow-500">
          <tr>
            <th></th>
            <th className="pt-2 pb-2">ت</th>
            <th className="pt-2 pb-2">الاسم</th>
            <th className="pt-2 pb-2">الجنس</th>
            <th className="pt-2 pb-2">صلة القرابة</th>
            <th className="pt-2 pb-2">تاريخ الميلاد</th>
            <th className="pt-2 pb-2">محل الولادة</th>
            <th className="pt-2 pb-2">العمل</th>
            <th className="pt-2 pb-2">مكان العمل</th>
            <th className="pt-2 pb-2">المحافظة</th>
            <th className="pt-2 pb-2">العنوان</th>
            <th className="pt-2 pb-2">الجنسية</th>
            <th className="pt-2 pb-2">جنسية اخرى</th>
            <th></th>
          </tr>
        </thead>
        {currentItems.map((user: any, index: number) => (
          <tbody
            className="border border-gray-500 hover:text-black"
            key={user._id}
          >
            <tr>
              <td></td>
              <td className="p-2">{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.allsefa}</td>
              <td>{user.dateofbrith}</td>
              <td>{user.brithplace}</td>
              <td>{user.work}</td>
              <td>{user.workplace}</td>
              <td>{user.state}</td>
              <td>{user.address}</td>
              <td>{user.nationality}</td>
              <td>{user.othernationality}</td>
              <td>
              <button onClick={() => handleDeleteFamily(user._id)}>
                    <svg
                      className="w-6 h-6 hover:text-red-600 mr-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                    </svg>
                  </button>
              </td>

            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

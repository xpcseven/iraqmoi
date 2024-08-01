"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Departments() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="overflow-hidden h-screen">
      <div className="h-full">
        <div className="flex justify-center">
          <img
            className=" absolute items-center opacity-40"
            src="https://i.ibb.co/vwqdjn6/iraq-map.png"
          />
        </div>
        <div className="h-full relative">
          {/* <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://i.ibb.co/dmv26YZ/Untitled-design.png" /> */}
          <div className="flex justify-center h-full">
            <div className="text-center font-cairo text-white relative">
              <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:items-center m-3 justify-center text-center  drop-shadow-2xl ">
                {/* Card */}
                {/* <div className=" w-56 rounded overflow-hidden shadow-lg border-2 border-sky-800 m-3">
  <img className=" size-56" src="https://i.ibb.co/86cS0nK/1.png" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-colorone text-center">اسم القسم</div>
    <div className='flex justify-center'>
    <Link href='' >
<button className='text-white bg-colorone p-4 '>القسم</button></Link> 
  </div>
  </div>
</div> */}
                {/* Card */}
              </div>

              <div className="pt-10">
                <img
                  className="pt-4 pb-3 mx-auto relative"
                  src="https://i.ibb.co/bvgt67P/images21.png"
                />
                <h1 className="text-gray-400 text-2xl font-bold text-center relative">
                  مديرية شؤون البطاقة الوطنية
                </h1>
                <button className="mt-4 border-b-2 border-yellow-500 rounded-tr-xl rounded-bl-xl w-44 h-11 text-white bg-sky-800 hover:bg-sky-700">
                  <Link
                    href="/userview"
                    className=" text-center relative justify-center"
                  >
                    قسم البطاقة الوطنية
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

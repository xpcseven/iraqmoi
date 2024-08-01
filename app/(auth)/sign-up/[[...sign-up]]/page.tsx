import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
export default function Page() {
  return (
    <div>
      <div className="h-full mt-20">
        <div className=" h-full relative">
          {/* <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://i.ibb.co/X7NzsnD/f486d871adf0d61da89af3340b683b6136137b6d-290823080514.jpg" /> */}
          <div className="fle-col justify-center h-full">
            <div>
              <img
                className=" size-36 mx-auto"
                src="https://i.ibb.co/bBnjBqR/584px-MOI.png"
              />
            </div>
            <div className="text-center font-cairo text-white relative">
              <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-xl font-bold text-sky-800">
                وزارة الداخلية
              </h1>

              <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-xl font-bold mt-4 text-sky-800">
مرحبآ بك في الموقع الرسمي لمسؤولي الادارة الخاص بــ
              </h1>
              
              <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-4xl font-bold text-sky-800">
                مديرية الاحوال المدنية و الجوازات و الاقامة
              </h1>

              <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-xl font-bold mt-4 text-sky-800">
            للمتابعة
              </h1>
              <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-xl font-bold mt-4 text-sky-800">
            يرجى مراسلة قسم الدعم الفني للمديرية
              </h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

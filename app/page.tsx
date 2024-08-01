import Link from "next/link";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="overflow-hidden h-screen">
      {/* <UserButton /> */}
      <div className="h-full mt-20">
        <div className=" h-full relative">
          {/* <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://i.ibb.co/X7NzsnD/f486d871adf0d61da89af3340b683b6136137b6d-290823080514.jpg" /> */}
          <div className="flex-col justify-center h-full ">
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
              <h1 className=" text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-4xl font-bold text-sky-800">
                مديرية الاحوال المدنية و الجوازات و الاقامة
              </h1>
              <p className="mt-5 mr-32 ml-32 mb-5 text-sky-800"></p>
              <Link href="/department">
                <button className=" bg-sky-800 hover:bg-sky-600 pr-7 pl-7 pt-3 pb-3 rounded-bl-xl rounded-tr-xl border-b-2 border-yellow-500">
                تسجيل الدخول
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

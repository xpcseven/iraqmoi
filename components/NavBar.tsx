"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/clerk-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
function NavBar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { setTheme } = useTheme();
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <div className="flex justify-between p-3 border-b-2 border-yellow-500 bg-sky-800">
      <div className="flex justify-center ">

        <div className="text-yellow-400 pr-2 mt-1">
          <h1>مديرية الاحوال المدنية و الجوازات و الاقامة</h1>
        </div>
      </div>

      <div className="flex justify-between">
      <div className="mt-2 ml-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
            </div>
        <div >

          <div className="">

            {isSignedIn && (
              <div className=" text-yellow-400">

<Popover>

  <PopoverTrigger>
    {" "}{user.username}
    </PopoverTrigger>
  <PopoverContent className="bg-sky1 border-2 border-yellow-400 ml-3 w-40">
  <SignedIn>
                  <Button
                    onClick={() => signOut(() => router.push("/"))}
                    className=""
                  >
                    <span className="text-yellow-400 max-lg:hidden border-2 rounded-lg font-cairo border-white p-2">
                     تسجيل الخروج{" "}
                    </span>
                  </Button>

                </SignedIn>

  </PopoverContent>
</Popover>


                </div>

            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import UsersProfile from "@/components/UsersProfile";
import { getUserById } from "@/lib/action/user.action";

async function page({ params }: any) {
  const id = params.id;
  const MongoUser = await getUserById({ id });

  return (
    <div>
      <UsersProfile userInfo={JSON.stringify(MongoUser?.user)} />
    </div>
  );
}

export default page;

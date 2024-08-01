import React from 'react';
import UpdateUser from "@/components/UpdateUser";
import { getUserById } from "@/lib/action/user.action";

const page = async ({ params }: any) => {
  const id = params.id;
  const MongoUser = await getUserById({id})
  return (
    <div> <UpdateUser userInfo={MongoUser?.user} />
  </div>
  )

  
};
export default page;
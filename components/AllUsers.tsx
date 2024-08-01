import { getAllUsers } from "@/lib/action/user.action";
import React from "react";
import UsersView from "./UsersView";

const AllUsers = async () => {
  const allUsers = await getAllUsers();
  return (
<div>
  <UsersView allUsers = {allUsers} />
</div>
  );
};
export default AllUsers;

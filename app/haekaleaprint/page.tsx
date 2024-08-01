import React from 'react'
import {getAllUsers} from  '@/lib/action/user.action';
import HaekleaPrint from '@/components/HaekleaPrint';


const AllUsers = async () => {
  const allUsers = await getAllUsers();
  return (
    <div>
        <HaekleaPrint allUsers = {allUsers} />

    </div>
  );
};

export default AllUsers;
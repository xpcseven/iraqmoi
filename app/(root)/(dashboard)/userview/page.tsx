import React from 'react'
import UsersView from '@/components/UsersView'
import { getAllUsers } from '@/lib/action/user.action';
import AllUsers from '@/components/AllUsers';

function page() {



  return (
    <div className=''>
        <AllUsers />
    </div>
  )
}

export default page
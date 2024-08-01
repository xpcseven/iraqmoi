import React from 'react'
import { getUserById } from '@/lib/action/user.action';
import PrintView from '../../../components/PrintView';

async function page({ params }: any) {
  const id = params.id;
  const MongoUser = await getUserById({id})
  return (
    <div>
    <PrintView userInfo={JSON.stringify(MongoUser?.user)} />
    </div>
  )
}

export default page
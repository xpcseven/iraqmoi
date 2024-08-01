import React from 'react'
import CourseCreate from "@/components/CourseCreate";
const page = ({ params }: any) => {

  return (
    <div>
        <CourseCreate userid={params.id} />
    </div>
  )
}
export default page;
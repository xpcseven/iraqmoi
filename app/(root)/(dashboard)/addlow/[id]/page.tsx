import LowCreate from "@/components/LowCreate";
import React from "react";
const page = ({ params }: any) => {
  return (
    <div>
      <LowCreate userid={params.id} />
    </div>
  );
};

export default page;

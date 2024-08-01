import FamilyCreate from "@/components/FamilyCreate";
import React from "react";
const page = ({ params }: any) => {
  return (
    <div>
      <FamilyCreate userid={params.id} />
    </div>
  );
};

export default page;

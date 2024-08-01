import TripCreate from "@/components/TripCreate";
import React from "react";
const page = ({ params }: any) => {
  return (
    <div>
      <TripCreate userid={params.id} />
    </div>
  );
};

export default page;
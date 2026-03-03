import React from "react";
import { LoaderCircle } from "lucide-react";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center fixed top-1/2 left-1/2">
      <LoaderCircle
        className="aminate-spin"
        size={64}
        strokeWidth={2}
        color="#4299e1"
      ></LoaderCircle>
    </div>
  );
};

export default Spinner;

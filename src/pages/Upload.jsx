import React from "react";
import Button from "../components/Button";

const Upload = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 px-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[85%] h-[150px] flex items-center justify-center shadow-md rounded-md p-6">
        <Button
          className="bg-[#CF796C] hover:bg-[#b3655c]  text-white rounded-full w-full sm:w-[300px] py-2 transition-all"
          label={"Upload Images"}
        />
      </div>
    </div>
  );
};

export default Upload;

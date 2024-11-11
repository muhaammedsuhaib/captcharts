import React, { useState } from "react";
import Button from "../components/Button";
import AddPost from "./AddPost";

const Upload = ({ fetchPosts }) => {
  const [addpost, setAddPost] = useState(false);

  const Oneclose = () => setAddPost(false);

  return (
    <div className="flex flex-col items-center justify-center mt-4 px-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex items-center justify-center shadow-md rounded-md p-6 bg-white transition-all ease-in-out duration-300">
        <Button
          className="bg-[#C08C5D] hover:bg-[#b0845d] text-white w-full sm:w-[300px] py-2 sm:py-3 transition-all duration-300 ease-in-out rounded-full"
          label={"Upload Images"}
          onClick={() => setAddPost(true)}
        />
      </div>
      {addpost && <AddPost Oneclose={Oneclose} fetchPosts={fetchPosts} />}
    </div>
  );
};

export default Upload;

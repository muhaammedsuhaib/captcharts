import React from "react";
import profile from "../assets/profile.png";
import Button from "../components/Button";
import { IoMdMore } from "react-icons/io";

const postData = [
  {
    id: 1,
    username: "Anitta K",
    time: "1 week ago",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/600x300",
    comments: [
      { replay: "how are you" },
      { replay: "Good" },
      { replay: "Like it!" },
    ],
  },
  {
    id: 2,
    username: "John Doe",
    time: "3 days ago",
    content: "Another post content with different user data.",
    image: "https://via.placeholder.com/600x300",
    comments: [
      { replay: "how are you" },
      { replay: "Good" },
      { replay: "Like it!" },
    ],
  },
];

const Posts = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 px-4 space-y-8">
      {postData.map((post) => (
        <div
          key={post.id}
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <img
              src={profile}
              alt="User Profile"
              className="w-12 h-12 sm:w-16 sm:h-16 border-2 object-cover border-red-700 rounded-full"
            />
            <div>
              <h3 className="text-md sm:text-lg font-semibold">
                {post.username}
              </h3>
              <span className="text-xs sm:text-sm text-gray-500">
                {post.time}
              </span>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-gray-700 text-sm sm:text-base">{post.content}</p>

          {/* Post Image */}
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto rounded-lg mt-4"
          />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              label="Like"
              className="text-[#D78F85] hover:bg-[#f8f5f5] border-2 border-[#D78F85] px-4 py-2 rounded-full w-full transition-all"
            />
            <Button
              label="Comment"
              className="bg-[#CF796C] hover:bg-[#a06158] text-white px-4 py-2 rounded-full w-full transition-all"
            />
          </div>

          {/* Comment Section */}
          <div className="bg-[#F9F9F9] rounded-md p-5 space-y-4">
            {post.comments.map((com, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={profile}
                      alt="User Profile"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                    />
                    <h3 className="text-sm sm:text-md font-semibold">
                      {post.username}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {post.time}
                    </span>
                  </div>
                  <IoMdMore className="text-gray-500" />
                </div>
                <div
                  className="bg-[#F5EAE3] p-3 sm:p-4 ml-10"
                  style={{ borderRadius: "0 20px 20px 20px" }}
                >
                  {com.replay}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

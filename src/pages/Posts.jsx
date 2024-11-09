import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import Button from "../components/Button";
import { IoMdMore } from "react-icons/io";
import AddComment from "./AddComment";
import axios from "axios";
import { formatDate } from "../utils/formatDate";
import Loading from "../components/Loading";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectPost, setSelectPost] = useState(null);

  const closeComment = () => setSelectPost(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 px-4 space-y-8">
        {posts?.map((post) => (
          <div
            key={post._id}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col bg-white shadow-md rounded-lg p-6 space-y-6"
          >
            {/* Profile Section */}
            <div className="flex items-center space-x-4 justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={profile}
                  alt="User Profile"
                  className="w-12 h-12 sm:w-16 sm:h-16 border-2 object-cover border-red-700 rounded-full"
                />
                <div>
                  <h3 className="text-md sm:text-lg font-semibold">
                    {post.username || "Anitta K C"}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {formatDate(post.createdAt)}
                  </span>
                </div>
              </div>
              <Button
                label="Report"
                className="border-2 text-[#D78F85] border-[#D78F85] rounded-lg p-0"
              />
            </div>

            {/* Post Content */}
            <p className="text-gray-700 text-sm sm:text-base">
              {post.description}
            </p>

            {/* Post Image */}
            <img
              src={post.post_image}
              alt="Post"
              className="w-full h-80 object-cover rounded-lg mt-4"
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
                onClick={() => setSelectPost(post._id)}
              />
            </div>

            {/* Comment Section */}
            <div className="bg-[#F9F9F9] rounded-md p-5 space-y-4">
              {post.comments?.map((com, i) => (
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
      {selectPost && <AddComment onClose={closeComment} postId={selectPost} />}
    </>
  );
};

export default Posts;

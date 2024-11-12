import React, { useEffect, useState } from "react";
import Upload from "../pages/Upload";
import Posts from "../pages/Posts";
import axiosInstance from "../api/axiosConfig";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get("/posts");
      setPosts(response.data.data.reverse());
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

  return (
    <div>
      <Upload fetchPosts={fetchPosts} />
      <Posts
        posts={posts}
        loading={loading}
        error={error}
        fetchPosts={fetchPosts}
      />
    </div>
  );
};

export default FeedPage;

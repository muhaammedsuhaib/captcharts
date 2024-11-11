import React, { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import toast from "react-hot-toast";

const AddComment = ({ postId, onClose }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async(e) => {
    e.preventDefault();
    if (comment) {
      try {
        const response= await axios.post(`https://captcharts-server.onrender.com/api/posts/comment/${postId}`,{replay:comment});
        toast.success(response.data.message ||'comment added successfully');
      } catch (error) {
        toast.error('error adding comment');
      }
      onClose(); 
    } else {
      alert("Please enter a comment before submitting!");
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold ">Add Comment</h2>
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <div>
          <textarea
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
            placeholder="Write your comment here..."
            rows={5}
            value={comment}
            onChange={handleCommentChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#CF796C] text-white px-4 py-2 rounded-full hover:bg-[#a06158] transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddComment;

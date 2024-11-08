import React, { useState } from "react";
import Modal from "../components/Modal";

const AddComment = ({ postId, Oneclose }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      // Here you would send the comment data (e.g., postId and comment) to your backend
      console.log("Comment Added:", { postId, comment });
      Oneclose(); // Close the modal after submission
    } else {
      alert("Please enter a comment before submitting!");
    }
  };

  return (
    <Modal onclose={Oneclose}>
      <h2 className="text-xl font-semibold ">Add Comment</h2>

      {/* Comment Form */}
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

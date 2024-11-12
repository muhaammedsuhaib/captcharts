import React, { useState } from "react";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import axiosInstance from "../api/axiosConfig";

const AddPost = ({ Oneclose, fetchPosts }) => {
  const [loading, setloading] = useState(false);

  const [formData, setFormData] = useState({
    file: null,
    description: "",
  });

  const [errors, setErrors] = useState({
    file: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const selectedFile = files[0];
      if (
        selectedFile &&
        !["image/jpeg", "image/png"].includes(selectedFile.type)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "Please upload a JPG or PNG file",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        file: selectedFile,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = { file: "", description: "" };
    let isValid = true;

    if (!formData.file) {
      newErrors.file = "Image is required";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const postData = new FormData();
    postData.append("file", formData.file);
    postData.append("description", formData.description);
    setloading(true);
    try {
      const response = await axiosInstance.post("/posts", postData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(response.data.message || "Post created successfully");
      Oneclose();
      fetchPosts();
      setloading(false);
    } catch (error) {
      console.error("Error uploading post:", error);
      toast.error("Error uploading post");
    } finally {
      setloading(false);
    }
  };
  if (loading) return <Loading />;
  return (
    <Modal onClose={Oneclose}>
      <h2 className="text-xl font-semibold mb-4">Add New Post</h2>

      {/* Post Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Post
          </label>
          <input
            type="file"
            name="file"
            onChange={handleInputChange}
            accept=".jpg,.jpeg,.png" // Restrict file types
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {errors.file && (
            <p className="text-red-500 text-xs mt-1">{errors.file}</p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[#CF796C] text-white rounded-full hover:bg-[#a06158] transition-all"
          >
            Add Post
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddPost;

import React, { useState } from 'react';
import Modal from '../components/Modal';

const AddPost = ({ Oneclose }) => {
  const [formData, setFormData] = useState({
    file: null,
    title: '',
  });

  const [errors, setErrors] = useState({
    file: '',
    title: '',
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { file: '', title: '' };

    if (!formData.file) {
      newErrors.file = 'Image is required';
      valid = false;
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data:', formData);
      // Handle form submission here
      Oneclose(); // Close modal after successful submission
    }
  };

  return (
    <Modal onclose={Oneclose} >
      <h2 className="text-xl font-semibold mb-4">Add New Post</h2>

      {/* Post Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
          <input
            type="file"
            name="file"
            onChange={handleInputChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
        </div>

        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
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

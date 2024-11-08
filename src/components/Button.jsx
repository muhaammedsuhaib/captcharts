import React from 'react';

const Button = ({ label, className, onClick, onChange,type }) => {
  return (
    <button 
      type={type}
      className={`px-4 py-2 font-semibold transition-all ${className}`}
      onClick={onClick} 
      onChange={onChange} 
    >
      {label}
    </button>
  );
};

export default Button;

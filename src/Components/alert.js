// Alert.js
import React from "react";
import { FaTimes } from "react-icons/fa";

const Alert = ({ message, type, onClose }) => {
  // Define a map for different alert types to handle styles
  const typeStyles = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  };

  return (
    <div
      className={`flex justify-between items-center border-l-4 p-4 mb-4 rounded ${typeStyles[type]} `}
      role="alert"
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-lg">
        <FaTimes />
      </button>
    </div>
  );
};

export default Alert;

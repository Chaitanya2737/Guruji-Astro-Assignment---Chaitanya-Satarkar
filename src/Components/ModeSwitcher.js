// ModeSwitcher.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../redux/modeReducer'; // Import the toggle action

const ModeSwitcher = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode); 
  console.log(mode)

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <div className="flex justify-end  items-center mt-4 mr-3">
      <button
        onClick={handleToggle}
        className={`py-2 px-4 rounded ${
          mode === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
        }`}
      >
        Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ModeSwitcher;

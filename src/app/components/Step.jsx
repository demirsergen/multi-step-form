import React from 'react';

const Step = ({ num, active }) => {
  if (num === active) {
    return (
      <div className="w-10 h-10 rounded-full bg-blue-200 text-black flex items-center font-bold justify-center">
        {num}
      </div>
    );
  } else {
    return (
      <div className="w-10 h-10 rounded-full bg-transparent text-white border-white border-2 font-bold flex items-center justify-center">
        {num}
      </div>
    );
  }
};

export default Step;

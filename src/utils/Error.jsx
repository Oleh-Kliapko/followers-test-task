import React from 'react';
import errorImage from '@/images/error.png';

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={errorImage} alt="Error" className="mb-8" />
      <h1 className="text-4xl font-bold mb-8 text-gray-800 font-sans">
        Sorry, something is wrong. Try again later!
      </h1>
    </div>
  );
};

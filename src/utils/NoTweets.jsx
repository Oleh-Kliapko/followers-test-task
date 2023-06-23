import React from 'react';
import noTweets from '@/images/no-tweets.gif';

export const NoTweets = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={noTweets} alt="noTweets" className="mb-8" />
      <h1 className="text-4xl font-bold mb-8 text-gray-800 font-sans">
        No tweets is here! What a shame!
      </h1>
    </div>
  );
};

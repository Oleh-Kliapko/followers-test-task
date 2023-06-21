import { useState, useEffect, Suspense } from 'react';

import { TweetsList } from '@/components/TweetsList';
import { Loader } from '@/services';
import { API } from '@/api/operations';

export const Tweets = () => {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem('tweets')) || null
  );

  useEffect(() => {
    const allTweets = API.fetchTweets();
    allTweets
      .then(res => {
        setTweets(res);
        localStorage.setItem('tweets', JSON.stringify(res));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {tweets && <TweetsList tweets={tweets} />}
    </Suspense>
  );
};

import { useState, useEffect } from 'react';

import { TweetsList } from '@/components/TweetsList';
import { Loader } from '@/services';
import { API } from '@/api/operations';

export const Tweets = () => {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem('tweets')) || null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await API.fetchTweets();
        setTweets(res);
        localStorage.setItem('tweets', JSON.stringify(res));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>{loading ? <Loader /> : tweets && <TweetsList tweets={tweets} />}</div>
  );
};

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { TweetCard } from './TweetCard';

export const TweetsList = ({ tweets, filter }) => {
  const [filteredTweets, setFilteredTweets] = useState([]);

  const filterTweets = () => {
    switch (filter) {
      case 'show all':
        setFilteredTweets(tweets);
        break;
      case 'follow':
        setFilteredTweets(
          tweets.filter(
            item => localStorage.getItem(`following_${item.user}`) === 'false'
          )
        );
        break;
      case 'followings':
        setFilteredTweets(
          tweets.filter(
            item => localStorage.getItem(`following_${item.user}`) === 'true'
          )
        );
        break;
      default:
        setFilteredTweets(tweets);
        break;
    }
  };

  useEffect(() => {
    filterTweets();
  }, [tweets, filter]);

  const updateTweets = tweetId => {
    tweets.forEach(item => {
      if (item.id === tweetId) {
        const following =
          JSON.parse(localStorage.getItem(`following_${item.user}`)) || false;
        localStorage.setItem(`following_${item.user}`, !following);
      }
    });
    filterTweets();
  };

  return (
    <section className="flex flex-wrap gap-12 pt-12 pb-[100px] justify-center">
      {filteredTweets.map(item => (
        <TweetCard key={item.id} item={item} updateTweets={updateTweets} />
      ))}
    </section>
  );
};

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired,
  filter: PropTypes.string,
};

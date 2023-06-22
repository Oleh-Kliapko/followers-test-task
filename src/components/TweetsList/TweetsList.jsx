import PropTypes from 'prop-types';
import React from 'react';

import { TweetCard } from './TweetCard';

export const TweetsList = ({ tweets }) => {
  return (
    <section className="flex flex-wrap gap-12 mt-8 justify-center">
      {tweets.map(item => {
        return <TweetCard key={item.id} item={item} />;
      })}
    </section>
  );
};

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired,
};

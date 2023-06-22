import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { TweetCard } from './TweetCard';

export const TweetsList = ({ tweets }) => {
  const location = useLocation();

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

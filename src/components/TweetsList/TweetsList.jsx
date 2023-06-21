import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { TweetCard } from './TweetCard';

export const TweetsList = ({ tweets }) => {
  const location = useLocation();

  return (
    <section className="flex flex-wrap gap-4 mt-4 px-28">
      {tweets.map(item => {
        return <TweetCard key={item.id} item={item} />;
      })}
    </section>
  );
};

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired,
};

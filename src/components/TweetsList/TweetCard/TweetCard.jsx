import PropTypes from 'prop-types';
import { theme } from '@/services';

export const TweetCard = ({ item }) => {
  const { avatar, user, tweets, followers } = item;
  return (
    <div
      className="w-[380px] h-[460px] rounded-2xl"
      style={{ background: theme.colors.mainBg }}
    >
      <img src={avatar} alt={user} />
      {user}
      {tweets}
      {followers}
    </div>
  );
};

TweetCard.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};

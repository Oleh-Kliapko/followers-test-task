import PropTypes from 'prop-types';
import { theme, formatNumber } from '@/services';
import logo from '@/images/logo.png';
import mainPicture from '@/images/main.png';

export const TweetCard = ({ item }) => {
  const { avatar, user, tweets, followers } = item;
  return (
    <div
      className="w-[380px] h-[460px] rounded-2xl flex flex-col items-center relative"
      style={{ background: theme.colors.mainBg }}
    >
      <img
        className="h-auto w-[76px] absolute top-5 left-5"
        src={logo}
        alt="Logo"
      />
      <img
        className="h-auto w-[308px] mt-7 mb-[-18px]"
        src={mainPicture}
        alt="Main picture"
      />
      <div className="h-2 w-[100%] absolute top-[214px] bg-prime drop-shadow-secondary"></div>
      <div className="w-[80px] h-[80px] border-8 rounded-full overflow-hidden z-10 drop-shadow-secondary border-prime">
        <img className="w-full h-full object-cover" src={avatar} alt={user} />
      </div>
      <div className="py-7 flex flex-col items-center font-sans font-medium text-prime">
        <p className="m-0 mb-4 p-0">{formatNumber(tweets)} TWEETS</p>
        <p className="m-0 p-0">{formatNumber(followers)} FOLLOWERS</p>
      </div>
      <button
        className="w-[196px] h-[50px] rounded-lg font-sans font-semibold bg-prime drop-shadow-button hover:bg-hoverBackground"
        type="button"
      >
        FOLLOW
      </button>
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

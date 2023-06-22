import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { theme, formatNumber } from '@/utils';
import logo from '@/images/logo.png';
import mainPicture from '@/images/main.png';
import defaultPhoto from '@/images/boy.png';

export const TweetCard = ({ item }) => {
  const { avatar, user, tweets, followers } = item;

  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem(`following_${user}`)) || false
  );

  useEffect(() => {
    localStorage.setItem(`following_${user}`, following);
  }, [following, user]);

  const handleFollowClick = () => {
    setFollowing(prevFollowing => !prevFollowing);
  };

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
      <div className="w-[80px] h-[80px] border-8 rounded-full overflow-hidden z-10 border-prime drop-shadow-secondary">
        <img
          className="w-full h-full object-cover"
          src={avatar ? avatar : defaultPhoto}
          alt={user}
        />
      </div>
      <div className="py-7 flex flex-col items-center font-sans font-medium text-prime">
        <p className="m-0 mb-4 p-0">{formatNumber(tweets)} TWEETS</p>
        <p className="m-0 p-0">
          {formatNumber(following ? followers + 1 : followers)} FOLLOWERS
        </p>
      </div>
      <button
        className="w-[196px] h-[50px] rounded-lg font-sans font-semibold drop-shadow-button"
        style={{
          background: following ? theme.colors.secondBg : theme.colors.prime,
        }}
        type="button"
        onClick={handleFollowClick}
      >
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
};

TweetCard.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';
import React from 'react';

import { theme } from '@/utils';

export const CardBtn = ({ handleFollowClick, following }) => {
  return (
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
  );
};

CardBtn.propTypes = {
  handleFollowClick: PropTypes.func,
  following: PropTypes.bool.isRequired,
};

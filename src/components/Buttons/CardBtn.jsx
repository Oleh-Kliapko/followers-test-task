import PropTypes from 'prop-types';
import React from 'react';

import { theme, styles } from '@/utils';

export const CardBtn = ({ handleFollowClick, following }) => {
  return (
    <button
      className={styles.buttonTweet}
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

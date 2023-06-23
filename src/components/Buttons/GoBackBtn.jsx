import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { styles } from '@/utils';

export const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className={`${styles.buttonTweet} z-30 fixed top-20 left-10`}
      onClick={() => navigate('/')}
    >
      ⬅ Go back
    </button>
  );
};

GoBackBtn.propTypes = {
  onClick: PropTypes.func,
};

import PropTypes from 'prop-types';
import React from 'react';

import { styles } from '@/utils';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button
      className={`${styles.buttonTweet} z-30 fixed bottom-2 left-1/2 transform -translate-x-1/2 text-prime bg-navBarBg`}
      type="button"
      onClick={handleLoadMore}
    >
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func,
};

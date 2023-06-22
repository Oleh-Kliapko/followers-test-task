import PropTypes from 'prop-types';
import React from 'react';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button
      className="w-[196px] h-[50px] z-100 rounded-lg font-sans font-semibold drop-shadow-button"
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

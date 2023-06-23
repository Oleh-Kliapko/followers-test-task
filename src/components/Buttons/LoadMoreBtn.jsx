import PropTypes from 'prop-types';
import React from 'react';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button
      className="z-30 fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[196px] h-[50px] font-sans font-semibold text-lg text-prime rounded-lg bg-navBarBg drop-shadow-button"
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

import PropTypes from 'prop-types';
import React from 'react';

export const Dropdown = ({ handleFilterChange, filter }) => {
  return (
    <select
      className="z-30 fixed top-20 left-1/2 transform -translate-x-1/2 w-[196px] h-[50px] pl-4 font-sans font-semibold text-lg text-prime rounded-lg bg-navBarBg drop-shadow-button"
      value={filter}
      onChange={handleFilterChange}
    >
      <option value="show all">Show All</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </select>
  );
};

Dropdown.propTypes = {
  handleFilterChange: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

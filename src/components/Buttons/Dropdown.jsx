import PropTypes from 'prop-types';
import React from 'react';

import { styles } from '@/utils';

export const Dropdown = ({ handleFilterChange, filter }) => {
  return (
    <select
      className={`${styles.buttonTweet} z-30 fixed top-20 left-1/2 transform -translate-x-1/2 pl-4 text-prime bg-navBarBg`}
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

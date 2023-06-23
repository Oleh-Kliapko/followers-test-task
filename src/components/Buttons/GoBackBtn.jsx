import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="z-30 fixed top-20 left-10 pl-4 font-sans font-semibold text-md drop-shadow-button"
      onClick={() => navigate('/')}
    >
      ⬅ Go back
    </button>
  );
};

GoBackBtn.propTypes = {
  onClick: PropTypes.func,
};

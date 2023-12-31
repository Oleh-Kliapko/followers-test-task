import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

import { theme, styles } from '@/utils';

export const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 left-0 z-20 flex items-center justify-between py-4 px-24 mb-10 w-screen bg-navBarBg drop-shadow-xl">
        <NavLink
          className={styles.navBar}
          style={{
            color:
              location.pathname === '/'
                ? theme.colors.prime
                : theme.colors.second,
            borderBottom:
              location.pathname === '/' ? theme.borders.prime : 'none',
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={styles.navBar}
          style={{
            color:
              location.pathname === '/tweets'
                ? theme.colors.prime
                : theme.colors.second,
            borderBottom:
              location.pathname === '/tweets' ? theme.borders.prime : 'none',
          }}
          to="/tweets"
        >
          Tweets
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};

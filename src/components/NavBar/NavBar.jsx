import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

import { Loader, theme } from '@/services';

export const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 left-0 z-10 flex items-center justify-between py-4 px-24 w-screen bg-navBarBg drop-shadow-xl">
        <NavLink
          className="text-lg block no-underline font-sans font-semibold"
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
          className="text-lg block no-underline font-sans font-semibold"
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

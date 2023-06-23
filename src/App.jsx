import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavBar } from '@/components/NavBar';
import { Home, Tweets } from '@/pages';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

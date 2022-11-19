import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import BusinessCard from '../pages/BusinessCard';
import Result from '../pages/Result';
import Qrcode from '../pages/Qrcode';
import UserCard from '../pages/UserCard';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/make_business_card" element={<BusinessCard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/QRview" element={<Qrcode />} />
        <Route path="/usercard/:id" element={<UserCard></UserCard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

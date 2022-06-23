import React, { useEffect } from 'react';
import './loginpage.scss';
import { ReactComponent as Banner2Ic } from '../../Assets/banner2.svg';
import Banner from '../../Components/Banner/Banner';
import { Outlet, useNavigate } from 'react-router';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='app__login-page'>
      <Outlet />
      <Banner />
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { Outlet } from 'react-router';
import './service.scss';
import { ReactComponent as ArrowIc } from '../../../Assets/arrow.svg';

const Service: React.FC = () => {
  return (
    <div className='app__layout-service'>
      <div className='app__layout-service__content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Service;

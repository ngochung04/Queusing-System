import React from 'react';
import './system.scss';
import { Outlet } from 'react-router';

const System: React.FC = () => {
  return (
    <div className="app__layout-system">
      <div className="app__layout-system__content">
        <Outlet />
      </div>
    </div>
  );
};

export default System;

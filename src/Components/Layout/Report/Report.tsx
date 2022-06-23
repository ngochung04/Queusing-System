import React from 'react';
import { Outlet } from 'react-router';
import './report.scss';

const Report: React.FC = () => {
  return (
    <div className="app__layout-report">
      <div className="app__layout-report__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Report;

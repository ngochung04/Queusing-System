import React from 'react';
import { Outlet } from 'react-router';
import './queue.scss';

const Queue: React.FC = () => {
  return (
    <div className="app__layout-queue">
      <div className="app__layout-queue__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Queue;

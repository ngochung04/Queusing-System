import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../Components/Sidebar/Sidebar';
import SiteMap from '../../Components/SiteMap/SiteMap';
import Textbox from '../../Components/Textbox/Textbox';
import UserSection from '../../Components/UserSection/UserSection';
import './dashboardpage.scss';

const DashboardPage: React.FC = () => {
  return (
    <div className="app__dashboard-page">
      <Sidebar />
      <UserSection />
      <div className="dashboard__content">
        <SiteMap />
        <div className="dashboard__content__container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

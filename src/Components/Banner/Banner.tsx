import React from 'react';
import { ReactComponent as Banner1Ic } from '../../Assets/banner1.svg';
import { ReactComponent as Banner2Ic } from '../../Assets/banner2.svg';
import './banner.scss';

const Banner: React.FC = () => {
  const path = window.location.pathname;

  return (
    <div className='images'>
      {path === '/login' ? <Banner1Ic /> : <Banner2Ic />}
      {path === '/login' && (
        <div className='heading'>
          <div className='heading-small'>Hệ thống</div>
          <div className='heading-large'>Quản lý xếp hàng</div>
        </div>
      )}
    </div>
  );
};

export default Banner;

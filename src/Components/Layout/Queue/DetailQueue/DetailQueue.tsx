import React from 'react';
import './detailqueue.scss';
import { useNavigate } from 'react-router';
import { ReactComponent as ReturnIc } from '../../../../Assets/return.svg';

const DetailQueue: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app__layout-queue__detail-queue">
      <div className="app__layout-queue__detail-queue__title">
        Quản lý cấp số
      </div>
      <div className="app__layout-queue__detail-queue__container">
        <div className="row form-label">Thông tin thiết bị</div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Mã thiết bị:</div>
          <div className="flex-1">Loại thiết bị:</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Tên thiết bị:</div>
          <div className="flex-1">Tên đăng nhập:</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Địa chỉ IP:</div>
          <div className="flex-1">Mật khẩu:</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Dịch vụ sử dụng:</div>
        </div>
      </div>
    </div>
  );
};

export default DetailQueue;

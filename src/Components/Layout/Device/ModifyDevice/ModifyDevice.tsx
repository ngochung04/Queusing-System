import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Select from '../../../Select/Select';
import Textbox from '../../../Textbox/Textbox';
import './modifydevice.scss';

const typeofDevice = ['Kiosk', 'Display counter'];
const ModifyDevice: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='app__layout-device__modify-device'>
      <div className='app__layout-device__modify-device__title'>
        Quản lý thiết bị
      </div>
      <div className='app__layout-device__modify-device__container'>
        <div className='row form-label'>Thông tin thiết bị</div>
        <div className='row'>
          <Textbox label='Mã thiết bị *' />
          <Select label='Loại thiết bị' options={typeofDevice} />
        </div>
        <div className='row'>
          <Textbox label='Tên thiết bị *' />
          <Textbox label='Tên đăng nhập *' />
        </div>
        <div className='row'>
          <Textbox label='Địa chỉ IP *' />
          <Textbox label='Mật khẩu *' />
        </div>
        <div className='row'>
          <Textbox label='Dịch vụ sử dụng *' />
        </div>

        <div className='row note'>* Là trường thông tin bắt buộc</div>
      </div>
      <div className='app__layout-device__modify-device__btn__bottom'>
        <Button
          text='Hủy bỏ'
          isOutlined
          onClick={() => navigate('/dashboard/device/modify')}
        />
        <Button
          text='Cập nhật thiết bị'
          onClick={() => navigate('/dashboard/device/modify')}
        />
      </div>
    </div>
  );
};

export default ModifyDevice;

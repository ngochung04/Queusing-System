import React from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as LogoIc } from '../../../Assets/logo.svg';
import Button from '../../Button/Button';
import Textbox, { InputType } from '../../Textbox/Textbox';
import './editpasswordform.scss';

const EditPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='edit-password-form'>
      <div className='edit-password-form-top'>
        <LogoIc />
      </div>
      <div className='edit-password-form-middle'>
        <div className='label'>Đặt lại mật khẩu mới</div>
        <Textbox label='Mật khẩu' type={InputType.password} />
        <Textbox label='Nhập lại mật khẩu' type={InputType.password} />
      </div>
      <div className='edit-password-form-bottom'>
        <Button text='Xác nhận' onClick={() => navigate('/login')} />
      </div>
    </div>
  );
};

export default EditPasswordForm;

import React from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as LogoIC } from '../../../Assets/logo.svg';
import Button from '../../Button/Button';
import Textbox from '../../Textbox/Textbox';
import './forgotpasswordform.scss';

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='forgot-password-form'>
      <div className='forgot-password-form-top'>
        <LogoIC />
      </div>
      <div className='forgot-password-form-middle'>
        <div className='label'>Đặt lại mật khẩu</div>
        <Textbox label='Vui lòng nhập email để đặt lại mật khẩu của bạn*' />
      </div>
      <div className='forgot-password-form-bottom'>
        <Button text='Huỷ' isOutlined onClick={() => navigate('/login')} />
        <Button text='Tiếp tục' onClick={() => navigate('/edit-password')} />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

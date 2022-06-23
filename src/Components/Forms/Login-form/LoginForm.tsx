import React from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as LogoIC } from '../../../Assets/logo.svg';
import Button from '../../Button/Button';
import Textbox, { InputType } from '../../Textbox/Textbox';
import './loginform.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/userSlice';
import { useEffect } from 'react';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    console.log('render');
    setEmail('');
    setPassword('');
    setError('');

    return () => {
      setEmail('');
      setPassword('');
      setError('');
    };
  }, []);

  const signIn = (): void => {
    if (email === '' || !email || password === '' || !password) {
      setError('Email và mật khẩu không được để trống !');
    } else {
      dispatch(login({ email: email }));
      navigate('/dashboard/panel');
    }
  };

  return (
    <div className='login-form'>
      <div className='login-form-top'>
        <LogoIC />
      </div>
      <div className="login-form-middle">
        {error !== "" && <div className="error">{error}</div>}
        <Textbox label="Email đăng nhập *" value={email} onChange={setEmail} />
        <Textbox label="Mật khẩu *" type={InputType.password} value={password} onChange={setPassword}/>
        <div
          className='forgot-password'
          onClick={() => navigate('/forgot-password')}
        >
          Quên mật khẩu?
        </div>
      </div>
      <div className='login-form-bottom'>
        <Button text='Đăng nhập' onClick={() => signIn()} />
      </div>
    </div>
  );
};

export default LoginForm;

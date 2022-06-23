import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Textbox from '../../../Textbox/Textbox';
import './newservice.scss';

const NewService: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='new-service'>
      <div className='new-service__tittle'>Quản lý dịch vụ</div>

      <div className='new-service__container'>
        <div className='information'>
          <div className='row form-label'>Thông tin dịch vụ</div>
          <div className='row'>
            <div className='col flex-1'>
              <Textbox label='Mã dịch vụ *' />
              <Textbox label='Tên dịch vụ *' />
            </div>
            <div className='col flex-1'>
              Mô tả
              <textarea />
            </div>
          </div>
        </div>
        <div className='regulation'>
          <div className='form-label row'>Quy tắc cấp số</div>

          <div className='row'>
            <input type='checkbox' name='checkbox1' className='checkbox ' />
            <label htmlFor='checkbox1'>
              Tăng từ động từ
              <input
                type='text'
                value={'0001'}
                className='input-text'
                readOnly
              />{' '}
              đến
              <input
                type='text'
                value={'9999'}
                className='input-text'
                readOnly
              />
            </label>
            <br />
          </div>

          <div className='row'>
            <input type='checkbox' name='checkbox2' className='checkbox ' />
            <label htmlFor='checkbox2'>
              Prefix
              <input
                type='text'
                value={'0001'}
                className='input-text'
                readOnly
              />
            </label>
            <br />
          </div>

          <div className='row'>
            <input type='checkbox' name='checkbox3' className='checkbox ' />
            <label htmlFor='checkbox'>
              Surfix
              <input
                type='text'
                value={'0001'}
                className='input-text'
                readOnly
              />
            </label>
            <br />
          </div>

          <div className='row'>
            <input type='checkbox' name='checkbox4' className='checkbox ' />
            <label htmlFor='checkbox4'>Reset mỗi ngày</label>
          </div>
          <div className='notification'>* Là trường thông tin bắt buộc</div>
        </div>
      </div>

      <div className='new-service_btn'>
        <Button
          text='Hủy bỏ'
          isOutlined
          onClick={() => navigate('/dashboard/service/list')}
        />
        <Button
          text='Cập nhật'
          onClick={() => navigate('/dashboard/service/list')}
        />
      </div>
    </div>
  );
};

export default NewService;

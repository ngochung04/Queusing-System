import React from 'react';
import { useNavigate } from 'react-router';
import './newrole.scss';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import Button from '../../../Button/Button';

const permisionGroup = ["Tất cả", "Nhóm chức năng A", "Nhóm chức năng B", "Nhóm chức năng C"]

const NewRole: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app__layout-system__new-role">
      <div className="app__layout-system__new-role__title">
        Danh sách vai trò
      </div>
      <div className="app__layout-system__new-role__container">
        <div className="row form-label">Thông tin vai trò</div>
        <div className="row full">
          <div className="flex-1 col">
            <Textbox label='Tên vai trò *'/>
            <Textbox label='Mô tả:' type={InputType.field} />
            <div className="row">* Là trường bắt buộc</div>
          </div>
          <div className="flex-1 col">
            <div className="row">Phân quyền chức năng *</div>
            <div className="box">
              <div className="row permission-group">
                Nhóm chức năng A
              </div>
              {permisionGroup.map((role, index) => {
                return <div className="role" key={index}>
                  <input type="checkbox" />
                  <span>{role}</span>
                </div>
              })}
              <div className="row permission-group">
                Nhóm chức năng B
              </div>
              {permisionGroup.map((role, index) => {
                return <div className="role" key={index}>
                  <input type="checkbox" />
                  <span>{role}</span>
                </div>
              })}
              
            </div>
          </div>
        </div>
        
      </div>

      <div className="app__layout-device__new-device__btn__bottom">
        <Button
          text='Hủy bỏ'
          isOutlined
          onClick={() => navigate('/dashboard/system/roles')}
        />
        <Button
          text='Thêm vai trò'
          onClick={() => navigate('/dashboard/system/roles')}
        />
      </div>
    </div>
  );
};

export default NewRole;

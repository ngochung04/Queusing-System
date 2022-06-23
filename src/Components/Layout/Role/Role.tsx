import React from 'react';
import { useNavigate } from 'react-router';
import Textbox from '../../Textbox/Textbox';
import './role.scss';
import Button from '../../../Components/Button/Button';

const Role: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="role-list">
      <div className="role-list__tittle">Danh sách vai trò</div>
      <div className="role-list__container">
        <div className="information">
          <div className="row form-label">Thông tin vai trò</div>
          <div className="row">
            <div className="col flex-1">
              <Textbox label="Tên vai trò" />
              <div className="description">
                Mô tả
                <textarea />
              </div>
              <div className="notification">* là trường hợp bắt buộc</div>
            </div>
            <div className="col flex-1">
              <div className="function-top">Phân quyền chức năng*</div>
              <div className="function-bottom">
                <div className="function-A">Nhóm chức năng A</div>
                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Tất cả</label>
                  <br />
                </div>

                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Chức năng x</label>
                  <br />
                </div>

                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Chức năng y</label>
                  <br />
                </div>

                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Chức năng z</label>
                  <br />
                </div>

                <div className="function-B">Nhóm chức năng B</div>
                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Tất cả</label>
                  <br />
                </div>

                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Chức năng x</label>
                  <br />
                </div>

                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Chức năng y</label>
                  <br />
                </div>

                <div className="row">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="checkbox "
                  />
                  <label htmlFor="checkbox">Chức năng z</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="role-list__btn">
        <Button
          text="Hủy bỏ"
          isOutlined
          onClick={() => navigate('/dashboard/setting-system')}
        />
        <Button
          text="Thêm"
          onClick={() => navigate('/dashboard/setting-system')}
        />
      </div>
    </div>
  );
};

export default Role;

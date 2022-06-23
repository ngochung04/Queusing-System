import React, { useState } from 'react';
import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';
import Select from '../../../Select/Select';
import { ReactComponent as XmarkIc } from '../../../../Assets/xmark.svg';
import './newqueue.scss';
import { useNavigate } from 'react-router';
import { serviceList } from '../../../Mock';

const NewQueue: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="app__layout-queue__new-queue">
      <div className="app__layout-queue__new-queue__title">Quản lý cấp số</div>
      <div className="app__layout-queue__new-queue__container">
        <div className="row heading">Cấp số mới</div>
        <div className="row">Dịch vụ khách hàng đã chọn</div>
        <div className="row">
          <Select options={serviceList} />
        </div>
        <div className="row buttons">
          <Button
            text="Huỷ bỏ"
            isOutlined
            onClick={() => {
              navigate('/dashboard/queue/list');
            }}
          />
          <Button
            text="In số"
            onClick={() => {
              setModal((prev) => !prev);
            }}
          />
        </div>
      </div>
      {modal && (
        <Modal>
          <div className="new-queue-number">
            <div className="number-top">
              <div
                className="number-top__icon"
                onClick={() => {
                  setModal((prev) => !prev);
                }}
              >
                <XmarkIc />
              </div>
              <div className="number-top__header">Số thứ tự được cấp</div>
              <div className="number-top__content">2001201</div>
              <div className="number-top__service">
                DV: Khám hàng mặt (tại quần số 1)
              </div>
            </div>
            <div className="number-bottom">
              <div className="number-bottom__date">
                Thời gian cấp: 9:30 11/10/2022
              </div>
              <div className="number-bottom__expiry-date">
                Hạn sử dụng: 17:30 11/10/2022
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewQueue;

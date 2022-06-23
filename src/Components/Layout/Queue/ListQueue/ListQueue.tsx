import React from 'react';
import Select from '../../../Select/Select';
import './listqueue.scss';
import Table from '../../../Table/Table';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import { useNavigate } from 'react-router';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import {
  activeStatus,
  connectionStatus,
  deviceList,
  queueProvider,
  services,
} from '../../../Mock';
import DatePicker from '../../../DatePicker/DatePicker';

const ListQueue: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="app__layout-queue__queue-list">
        <div className="app__layout-queue__queue-list__container">
          <div className="row app__layout-queue__queue-list__container__label">
            Danh sách cấp số
          </div>
          <div className="row app__layout-queue__queue-list__container__filters">
            <Select
              label="Tên dịch vụ"
              options={services}
              flexItem
              //   width={300}
            />
            <Select
              label="Trạng thái kết nối"
              options={connectionStatus}
              flexItem
              //   width={300}
            />
            <Select
              label="Nguồn cấp"
              options={queueProvider}
              flexItem
              //   width={300}
            />
            <DatePicker label="Chọn thời gian" flexItem/>
            <Textbox label="Từ khoá" type={InputType.search} flexItem/>
          </div>
          <div className="row table">
            <Table data={deviceList} displayRow={9} />
          </div>
        </div>
      </div>
      <div
        className="app__layout-queue__queue-list__float-btn"
        onClick={() => navigate('/dashboard/queue/new')}
      >
        <span>
          <AddIc />
        </span>
        <span>Cấp số mới</span>
      </div>
    </>
  );
};

export default ListQueue;

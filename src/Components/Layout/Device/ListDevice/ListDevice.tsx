import React from 'react';
import Select from '../../../Select/Select';
import Table from '../../../Table/Table';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import './listdevice.scss';
import { useNavigate } from 'react-router';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import { activeStatus, connectionStatus, deviceList } from '../../../Mock';

const ListDevice: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app__device-layout__device-list">
      <div className="app__device-layout__device-list__container">
        <div className="row app__device-layout__device-list__container__label">
          Danh sách thiết bị
        </div>
        <div className="row app__device-layout__device-list__container__filters">
          <Select
            label="Trạng thái hoạt động"
            options={activeStatus}
            width={300}
          />
          <Select
            label="Trạng thái kết nối"
            options={connectionStatus}
            width={300}
          />
          <Textbox label="Từ khoá" type={InputType.search} boxWidth={300} />
        </div>
        <div className="row app__device-layout__device-list__container__table">
          <Table data={deviceList} displayRow={9} />
        </div>
      </div>
      <div
        className="app__device-layout__device-list__float-btn"
        onClick={() => navigate('/dashboard/device/new')}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm thiết bị</span>
      </div>
    </div>
  );
};

export default ListDevice;

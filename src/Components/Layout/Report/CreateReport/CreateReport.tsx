import React, { useState } from 'react';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import './createreport.scss';
import { useNavigate } from 'react-router';
import Table from '../../../Table/Table';
import DatePicker from '../../../DatePicker/DatePicker';
import { deviceList } from '../../../Mock';

const CreateReport: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="app__layout-report__new-report">
      <div className="app__layout-report__new-report__container">
        <div className="row app__layout-report__new-report__container__label">
          <DatePicker label="Chọn thời gian" />
        </div>
        <div className="row app__layout-report__new-report__container__table">
          <Table data={deviceList} />
        </div>
      </div>

      <div
        className="app__layout-report__new-report__float-btn"
        onClick={() => {}}
      >
        <span>
          <AddIc />
        </span>
        <span>Cấp số mới</span>
      </div>
    </div>
  );
};

export default CreateReport;

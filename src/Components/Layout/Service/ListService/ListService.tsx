import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Select from "../../../Select/Select";
import Table, { IServiceRow } from "../../../Table/Table";
import "./listservice.scss";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import {
  activeStatus,
  connectionStatus,
  // serviceDetailList,
} from "../../../Mock";
import DatePicker from "../../../DatePicker/DatePicker";
import Textbox, { InputType } from "../../../Textbox/Textbox";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { disconnect } from "process";

const ListService: React.FC = () => {
  const navigate = useNavigate();
  const [serviceDetailList, setServiceDetailList] = useState<IServiceRow[]>();
  const [listData, setListData] = useState<IServiceRow[]>();
  useEffect(() => {
    // serviceDetailList.map((item) => {
    //   addDoc(collection(db, "serviceList"), item);
    // });
    const fetchData = async () => {
      const data: any = [];
      onSnapshot(collection(db, "serviceList"), (snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          const x = doc.data();
          data.push({
            serviceId: x.serviceId,
            serviceName: x.serviceName,
            serviceDescribe: x.serviceDescribe,
            isActivated: x.isActivated,
            serviceDetail: doc.id,
            serviceUpdate: doc.id,
          });
          setServiceDetailList(data);
          setListData(data);
        });
      });
    };
    fetchData();
  }, []);

  const handleSelectActiveStatus = (e: string) => {
    if (e === "Hoạt động") {
      const data = listData?.filter((item: IServiceRow) => item.isActivated);
      setServiceDetailList(data);
    } else if (e === "Ngưng hoạt động") {
      const data = listData?.filter((item: IServiceRow) => !item.isActivated);
      setServiceDetailList(data);
    } else {
      setServiceDetailList(listData);
    }
  };
  return (
    <div className="app__service-layout__service-list">
      <div className="app__service-layout__service-list__container">
        <div className="row app__service-layout__service-list__container__label">
          Danh sách dịch vụ
        </div>
        <div className="row app__service-layout__service-list__container__filters">
          <Select
            label="Trạng thái hoạt động"
            options={activeStatus}
            width={300}
            onSelectedChange={handleSelectActiveStatus}
          />
          <DatePicker label="Chọn thời gian" />
          <Textbox label="Từ khoá" type={InputType.search} />
        </div>
        <div className="row app__service-layout__service-list__container__table">
          {serviceDetailList && (
            <Table data={serviceDetailList} displayRow={9} />
          )}
        </div>
      </div>

      <div
        className="app__service-layout__service-list__float-btn"
        onClick={() => navigate("/dashboard/service/new")}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm dịch vụ</span>
      </div>
    </div>
  );
};

export default ListService;

import React, { useEffect, useMemo, useState } from "react";
import Select from "../../../Select/Select";
import Table, { IDeviceRow } from "../../../Table/Table";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import "./listdevice.scss";
import { useNavigate } from "react-router";
import Textbox, { InputType } from "../../../Textbox/Textbox";
import { activeStatus, connectionStatus } from "../../../Mock";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";

const ListDevice: React.FC = () => {
  const navigate = useNavigate();
  const [deviceList, setDeviceList] = useState<IDeviceRow[]>();
  const [listData, setListData] = useState<IDeviceRow[]>();

  useEffect(() => {
    // deviceList.map((x, i) => {
    //   addDoc(collection(db, "deviceList"), {
    //     ...x,
    //   });
    // });
    const fetchData = async () => {
      const data: any = [];
      onSnapshot(collection(db, "deviceList"), (snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          const x = doc.data();
          data.push({
            deviceId: doc.id,
            deviceName: x.deviceName,
            ipAddress: x.ipAddress,
            isActivated: x.isActivated,
            isConnected: x.isConnected,
            services: x.services,
            displayDetail: x.displayDetail,
            displayUpdate: x.displayUpdate,
          });
          setDeviceList(data);
          setListData(data);
        });
      });
    };
    fetchData();
  }, []);

  const handleSelectConnected = (e: string) => {
    if (e === "Kết nối") {
      const data = listData?.filter((item: IDeviceRow) => item.isConnected);
      setDeviceList(data);
    } else if (e === "Mất kết nối") {
      const data = listData?.filter((item: IDeviceRow) => !item.isConnected);
      setDeviceList(data);
    } else {
      setDeviceList(listData);
    }
  };

  const handleSelectActiveStatus = (e: string) => {
    if (e === "Hoạt động") {
      const data = listData?.filter((item: IDeviceRow) => item.isActivated);
      setDeviceList(data);
    } else if (e === "Ngưng hoạt động") {
      const data = listData?.filter((item: IDeviceRow) => !item.isActivated);
      setDeviceList(data);
    } else {
      setDeviceList(listData);
    }
  };

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
            onSelectedChange={handleSelectActiveStatus}
            width={300}
          />
          <Select
            label="Trạng thái kết nối"
            options={connectionStatus}
            onSelectedChange={handleSelectConnected}
            width={300}
          />
          <Textbox label="Từ khoá" type={InputType.search} boxWidth={300} />
        </div>
        <div className="row app__device-layout__device-list__container__table">
          {deviceList && <Table data={deviceList} displayRow={9} />}
        </div>
      </div>
      <div
        className="app__device-layout__device-list__float-btn"
        onClick={() => navigate("/dashboard/device/new")}
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

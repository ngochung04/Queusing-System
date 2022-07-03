import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./detaildevice.scss";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useSearchParams } from "react-router-dom";

const DetailDevice: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const [item, setItem] = useState({
    deviceId: "",
    deviceName: "",
    ipAddress: "",
    isActivated: true,
    isConnected: true,
    services: "",
    displayDetail: "",
    displayUpdate: "",
  });

  useLayoutEffect(() => {
    const id = search.get("id");
    const docRef = doc(db, "deviceList", id || "");

    onSnapshot(docRef, (doc: any) => {
      setItem({
        ...doc.data(),
      });
    });
  }, []);
  return (
    <div className="app__device-layout__detail-device">
      <div className="app__device-layout__detail-device__title">
        Quản lý thiết bị
      </div>
      <div className="app__device-layout__detail-device__container">
        <div className="row form-label">Thông tin thiết bị</div>
        <div className="row">
          <div className="flex-1">Mã thiết bị: {item.deviceId}</div>
          <div className="flex-1">Loại thiết bị: </div>
        </div>
        <div className="row">
          <div className="flex-1">Tên thiết bị: {item.deviceName}</div>
          <div className="flex-1">Tên đăng nhập:</div>
        </div>
        <div className="row">
          <div className="flex-1">Địa chỉ IP: {item.ipAddress}</div>
          <div className="flex-1">Mật khẩu:</div>
        </div>
        <div className="row">
          <div className="flex-1">Dịch vụ sử dụng:{item.services}</div>
        </div>
      </div>
      <div
        className="app__device-layout__detail-device__float-btn"
        onClick={() => navigate("/dashboard/device/modify")}
      >
        <span>
          <AddIc />
        </span>
        <span>Quay lại</span>
      </div>
    </div>
  );
};
//conmeo

export default DetailDevice;

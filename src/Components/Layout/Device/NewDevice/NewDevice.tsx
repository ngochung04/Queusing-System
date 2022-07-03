import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../../../../firebase";
import Button from "../../../Button/Button";
import Textbox from "../../../Textbox/Textbox";
import "./newdevice.scss";

const NewDevice: React.FC = () => {
  const navigate = useNavigate();
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

  const handleChange = (key: keyof typeof item) => (e: string) => {
    setItem({ ...item, [key]: e });
  };
  return (
    <div className="app__layout-device__new-device">
      <div className="app__layout-device__new-device__title">
        Quản lý thiết bị
      </div>
      <div className="app__layout-device__new-device__container">
        <div className="row form-label">Thông tin thiết bị</div>
        <div className="row">
          <Textbox label="Mã thiết bị *" onChange={handleChange("deviceId")} />
          <Textbox label="Loại thiết bị *" />
        </div>
        <div className="row">
          <Textbox
            label="Tên thiết bị *"
            onChange={handleChange("deviceName")}
          />
          <Textbox label="Tên đăng nhập *" />
        </div>
        <div className="row">
          <Textbox label="Địa chỉ IP *" onChange={handleChange("ipAddress")} />
          <Textbox label="Mật khẩu *" />
        </div>
        <div className="row">
          <Textbox
            label="Dịch vụ sử dụng *"
            onChange={handleChange("services")}
          />
        </div>
        <div className="row note">* Là trường thông tin bắt buộc</div>
      </div>
      <div className="app__layout-device__new-device__btn__bottom">
        <Button
          text="Hủy bỏ"
          isOutlined
          onClick={() => navigate("/dashboard/device/list")}
        />
        <Button
          text="Thêm thiết bị"
          onClick={() => {
            addDoc(collection(db, "deviceList"), item);
            navigate("/dashboard/device/list");
          }}
        />
      </div>
    </div>
  );
};

export default NewDevice;

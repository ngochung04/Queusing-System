import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { db } from "../../../../firebase";
import Button from "../../../Button/Button";
import Select from "../../../Select/Select";
import Textbox from "../../../Textbox/Textbox";
import "./modifydevice.scss";

const typeofDevice = ["Kiosk", "Display counter"];
const ModifyDevice: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const [item, setItem] = useState({
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
  const handleChange = (key: keyof typeof item) => (e: string) => {
    setItem({ ...item, [key]: e });
  };

  return (
    <div className="app__layout-device__modify-device">
      <div className="app__layout-device__modify-device__title">
        Quản lý thiết bị
      </div>
      <div className="app__layout-device__modify-device__container">
        <div className="row form-label">Thông tin thiết bị</div>
        <div className="row">
          <Textbox label="Mã thiết bị *" value={search.get("id") || ""} />
          <Select label="Loại thiết bị" options={typeofDevice} />
        </div>
        <div className="row">
          <Textbox
            label="Tên thiết bị *"
            value={item.deviceName}
            onChange={handleChange("deviceName")}
          />
          <Textbox label="Tên đăng nhập *" />
        </div>
        <div className="row">
          <Textbox
            label="Địa chỉ IP *"
            value={item.ipAddress}
            onChange={handleChange("ipAddress")}
          />
          <Textbox label="Mật khẩu *" />
        </div>
        <div className="row">
          <Textbox
            label="Dịch vụ sử dụng *"
            value={item.services}
            onChange={handleChange("services")}
          />
        </div>

        <div className="row note">* Là trường thông tin bắt buộc</div>
      </div>
      <div className="app__layout-device__modify-device__btn__bottom">
        <Button
          text="Hủy bỏ"
          isOutlined
          onClick={() => {
            navigate("/dashboard/device/list");
          }}
        />
        <Button
          text="Cập nhật thiết bị"
          onClick={() => {
            const docRef = doc(db, "deviceList", search.get("id") || "");

            updateDoc(docRef, item);

            navigate("/dashboard/device/list");
          }}
        />
      </div>
    </div>
  );
};

export default ModifyDevice;

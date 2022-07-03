import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { db } from "../../../../firebase";
import Button from "../../../Button/Button";
import Select from "../../../Select/Select";
import Textbox from "../../../Textbox/Textbox";
import "./modifyservice.scss";

const ModifyService: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const [item, setItem] = useState({
    serviceId: "",
    serviceName: "",
    serviceDescribe: "",
    isActivated: false,
    serviceDetail: false,
    serviceUpdate: false,
  });

  useLayoutEffect(() => {
    const id = search.get("id");
    const docRef = doc(db, "serviceList", id || "");

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
    <div className="app__layout-service__modify-service">
      <div className="app__layout-service__title">Quản lý dịch vụ</div>
      <div className="app__layout-service__container">
        <div className="row form-label">Thông tin dịch vụ</div>
        <div className="row">
          <div className="col flex-1">
            <Textbox
              label="Mã dịch vụ *"
              value={item.serviceId}
              onChange={handleChange("serviceId")}
            />
            <Textbox
              label="Tên dịch vụ *"
              value={item.serviceName}
              onChange={handleChange("serviceName")}
            />
          </div>
          <div className="col flex-1">
            Mô tả
            <textarea
              value={item.serviceDescribe}
              onChange={(e) => {
                setItem({ ...item, serviceDescribe: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="rule">Quy tắc cấp số</div>

        <div className="row note">* Là trường thông tin bắt buộc</div>
      </div>
      <div className="btn__bottom">
        <Button
          text="Hủy bỏ"
          isOutlined
          onClick={() => navigate("/dashboard/  service/list")}
        />
        <Button
          text="Sửa dịch vụ"
          onClick={() => {
            const docRef = doc(db, "serviceList", search.get("id") || "");

            updateDoc(docRef, item);
            navigate("/dashboard/service/list");
          }}
        />
      </div>
    </div>
  );
};

export default ModifyService;

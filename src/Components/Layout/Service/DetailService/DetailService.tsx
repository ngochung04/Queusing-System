import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import Select from "../../../Select/Select";
import Table from "../../../Table/Table";
import Textbox, { InputType } from "../../../Textbox/Textbox";
import "./detailservice.scss";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import { queueList } from "../../../Mock";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useSearchParams } from "react-router-dom";

const DetailService: React.FC = () => {
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
  return (
    <div className="app__layout-service__detail-service">
      <div className="app__layout-service__title">Quản lý dịch vụ</div>
      <div className="app__layout-service__detail-service__container">
        <div className="service-detail">
          <div className="row form-label">Thông tin dịch vụ</div>
          <div className="row">
            <div className="flex-1">Mã dịch vụ:</div>
            <div>{item.serviceId}</div>
          </div>
          <div className="row">
            <div className="flex-1">Tên dịch vụ:</div>
            <div>{item.serviceName}</div>
          </div>
          <div className="row">
            <div className="flex-1">Mô tả:</div>
            <div className="flex-2">{item.serviceDescribe}</div>
          </div>
          <div className="row form-label">Quy tắc cấp số</div>
          <div className="row">
            <div>Tăng tự động:</div>
            <div></div>
          </div>
          <div className="row">
            <div>Prefix:</div>
            <div></div>
          </div>
          <div className="row">
            <div>Reset mỗi ngày</div>
          </div>
        </div>
        <div className="service-queue">
          <div className="row filters">
            <Select
              label="Trạng thái"
              options={["Tất cả", "Đã hoàn thành", "Đã thực hiện", "Vắng"]}
            />
            <Textbox label="Từ khoá" type={InputType.search} />
          </div>
          <div className="row table">
            <Table data={queueList} displayRow={8} />
          </div>
        </div>
      </div>
      <div
        className="app__layout-service__add-service-btn"
        onClick={() => navigate("/dashboard/device/new")}
      >
        <span>
          <AddIc />
        </span>
        <span>Cập nhật danh sách</span>
      </div>
    </div>
  );
};

export default DetailService;
